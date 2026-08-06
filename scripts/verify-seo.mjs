import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const outputDirectory = 'dist';
const productionOrigin = 'https://adlnexus.com';
const localeCodes = ['en', 'sr', 'es', 'de', 'ru'];
const errors = [];

function collectHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return collectHtmlFiles(entryPath);
    return entryPath.endsWith('.html') ? [entryPath] : [];
  });
}

function routeForFile(file) {
  const routeDirectory = relative(outputDirectory, dirname(file)).split(sep).join('/');
  return routeDirectory ? `/${routeDirectory}/` : '/';
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]),
  );
}

function tags(html, element) {
  return [...html.matchAll(new RegExp(`<${element}\\b[^>]*>`, 'gi'))].map((match) => attributes(match[0]));
}

function addError(route, message) {
  errors.push(`${route}: ${message}`);
}

if (!existsSync(outputDirectory)) {
  throw new Error('Missing dist output. Run npm run build before the SEO verification.');
}

const htmlFiles = collectHtmlFiles(outputDirectory).sort();
const knownRoutes = new Set(htmlFiles.map(routeForFile));

if (htmlFiles.length !== 35) errors.push(`Expected 35 HTML pages, found ${htmlFiles.length}.`);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = routeForFile(file);
  const canonical = tags(html, 'link').filter((tag) => tag.rel === 'canonical');
  const alternates = tags(html, 'link').filter((tag) => tag.rel === 'alternate' && tag.hreflang);
  const metas = tags(html, 'meta');
  const robots = metas.find((tag) => tag.name === 'robots')?.content;
  const ogUrl = metas.find((tag) => tag.property === 'og:url')?.content;
  const ogImage = metas.find((tag) => tag.property === 'og:image')?.content;
  const insightRoute = /^\/(?:sr\/|es\/|de\/|ru\/)?insights\/$/.test(route);
  const expectedCanonical = `${productionOrigin}${route}`;

  if (!/<title>[^<]+<\/title>/i.test(html)) addError(route, 'missing a non-empty title');
  if (!metas.some((tag) => tag.name === 'description' && tag.content)) addError(route, 'missing a meta description');
  if ((html.match(/<h1\b/gi) ?? []).length !== 1) addError(route, 'must contain exactly one H1');
  if (canonical.length !== 1) addError(route, `expected one canonical link, found ${canonical.length}`);
  if (canonical[0]?.href !== expectedCanonical) addError(route, `canonical is ${canonical[0]?.href ?? 'missing'}, expected ${expectedCanonical}`);
  if (ogUrl !== expectedCanonical) addError(route, `og:url is ${ogUrl ?? 'missing'}, expected ${expectedCanonical}`);
  if (!ogImage?.startsWith(`${productionOrigin}/`)) addError(route, 'Open Graph image URL is not absolute and production-based');
  if (!metas.some((tag) => tag.name === 'twitter:title' && tag.content)) addError(route, 'missing Twitter title');
  if (!metas.some((tag) => tag.name === 'twitter:description' && tag.content)) addError(route, 'missing Twitter description');
  if (!tags(html, 'link').some((tag) => tag.rel === 'icon' && tag.href === '/favicon.svg')) addError(route, 'missing primary favicon declaration');
  if (alternates.length !== 6) addError(route, `expected six language alternatives, found ${alternates.length}`);
  if (!alternates.every((tag) => tag.href?.startsWith(`${productionOrigin}/`))) addError(route, 'contains a non-absolute language alternative');
  if (![...localeCodes, 'x-default'].every((locale) => alternates.some((tag) => tag.hreflang === locale))) addError(route, 'language alternatives are incomplete');
  if (insightRoute && robots !== 'noindex, follow') addError(route, 'draft Insights route must be noindex, follow');
  if (!insightRoute && robots !== 'index, follow, max-image-preview:large') addError(route, 'indexable route has unexpected robots metadata');

  for (const link of tags(html, 'a')) {
    if (!link.href?.startsWith('/')) continue;
    const pathname = new URL(link.href, productionOrigin).pathname;
    const normalizedRoute = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
    if (!knownRoutes.has(normalizedRoute)) addError(route, `broken internal link to ${link.href}`);
  }
}

const homepage = readFileSync(join(outputDirectory, 'index.html'), 'utf8');
if (!homepage.includes('application/ld+json')) errors.push('Homepage is missing Organization and WebSite JSON-LD.');

const sitemapIndexPath = join(outputDirectory, 'sitemap-index.xml');
const sitemapPath = join(outputDirectory, 'sitemap-0.xml');
if (!existsSync(sitemapIndexPath)) errors.push('Missing sitemap-index.xml.');
if (!existsSync(sitemapPath)) errors.push('Missing sitemap-0.xml.');

if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const sitemapEntries = sitemap.match(/<url>/g) ?? [];
  if (sitemapEntries.length !== 30) errors.push(`Expected 30 indexable sitemap entries, found ${sitemapEntries.length}.`);
  if (sitemap.includes('/insights/')) errors.push('Draft Insights routes must not appear in the sitemap.');
  if ([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].some((match) => !match[1].startsWith(`${productionOrigin}/`))) {
    errors.push('Sitemap contains a URL outside the canonical production origin.');
  }
}

const robotsPath = join(outputDirectory, 'robots.txt');
if (!existsSync(robotsPath)) errors.push('Missing robots.txt.');
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf8');
  if (!robots.includes(`Sitemap: ${productionOrigin}/sitemap-index.xml`)) errors.push('robots.txt does not reference the production sitemap index.');
}

const redirectsPath = join(outputDirectory, '_redirects');
if (!existsSync(redirectsPath)) errors.push('Missing Cloudflare Pages redirect rules.');
if (existsSync(redirectsPath)) {
  const redirects = readFileSync(redirectsPath, 'utf8');
  for (const rule of ['/about /about/ 301', '/solutions/pipedrive /solutions/pipedrive/ 301', '/:lang/solutions/:product /:lang/solutions/:product/ 301']) {
    if (!redirects.includes(rule)) errors.push(`Missing canonical trailing-slash redirect rule: ${rule}`);
  }
}

if (errors.length) {
  throw new Error(`SEO verification failed:\n- ${errors.join('\n- ')}`);
}

console.log(`SEO verification passed for ${htmlFiles.length} pages and 30 sitemap entries.`);
