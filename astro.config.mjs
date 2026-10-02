// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://adlnexus.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !/^\/(?:sr\/|es\/)?insights\/?$/.test(new URL(page).pathname) && !new URL(page).pathname.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          sr: 'sr',
          es: 'es',
        },
      },
    }),
  ],
});
