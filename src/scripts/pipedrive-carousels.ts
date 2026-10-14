// One complete idle interval after each interaction or pause, shared by all four sliders.
export const CAROUSEL_INTERVAL = 6000;

export function initPipedriveCarousels() {
 document.querySelectorAll<HTMLElement>('[data-carousel-controls]').forEach(controls => {
  const track = document.getElementById(controls.dataset.trackId!);
  if (!track || controls.dataset.ready) return;
  controls.dataset.ready = 'true';
  const root = controls.closest('section')!;
  const cards = Array.from(track.children) as HTMLElement[];
  const dots = controls.querySelector<HTMLElement>('.dots')!;
  const toggle = controls.querySelector<HTMLButtonElement>('.keyboard-playback')!;
  const centered = controls.dataset.centered === 'true';
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const mouse = matchMedia('(hover: hover) and (pointer: fine)');
  let steps: { left: number; card: number }[] = [];
  let buttons: HTMLButtonElement[] = [];
  let current = 0, direction = 1;
  let measuredWidth = track.clientWidth;
  let paused = false, hovering = false, focused = false, touching = false, visible = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let scrollTimer: ReturnType<typeof setTimeout> | undefined;
  const sync = () => {
   clearTimeout(timer);
   toggle.textContent = paused || motion.matches ? controls.dataset.play! : controls.dataset.pause!;
   toggle.setAttribute('aria-pressed', String(paused || motion.matches));
   toggle.disabled = motion.matches;
   if (steps.length > 1 && !paused && !motion.matches && !hovering && !focused && !touching && visible && !document.hidden) {
    timer = setTimeout(() => {
     // Reverse at each end, avoiding a long rewind over every card.
     if (current === steps.length - 1) direction = -1;
     if (current === 0) direction = 1;
     go(current + direction);
    }, CAROUSEL_INTERVAL);
   }
  };
  const update = () => {
   // Resize can dispatch scroll before ResizeObserver; preserve the old card anchor.
   if (track.clientWidth !== measuredWidth) return;
   current = steps.reduce((best, step, i) => Math.abs(step.left - track.scrollLeft) < Math.abs(steps[best].left - track.scrollLeft) ? i : best, 0);
   buttons.forEach((button, i) => {
    if (i === current) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
   });
   if (centered) cards.forEach((card, i) => card.classList.toggle('active', i === steps[current]?.card));
  };
  const go = (index: number, instant = false) => {
   const target = Math.max(0, Math.min(steps.length - 1, index));
   current = target;
   track.scrollTo({ left: steps[target].left, behavior: instant || motion.matches ? 'instant' : 'smooth' });
   if (instant) update();
   sync();
  };
  const layout = () => {
   const anchor = steps[current]?.card ?? 0;
   measuredWidth = track.clientWidth;
   const max = Math.max(0, track.scrollWidth - track.clientWidth);
   steps = [];
   cards.forEach((card, i) => {
    const left = Math.max(0, Math.min(max, centered ? card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2 : card.offsetLeft - cards[0].offsetLeft));
    // Several trailing cards can share the same final viewport. Use one final dot.
    if (!steps.length || Math.abs(left - steps[steps.length - 1].left) > 2) steps.push({ left, card: i });
   });
   // Keep existing focused dots when a resize leaves the number of steps unchanged.
   while (buttons.length > steps.length) buttons.pop()!.remove();
   while (buttons.length < steps.length) {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-controls', track.id);
    const index = buttons.length;
    button.addEventListener('click', () => go(index));
    dots.append(button); buttons.push(button);
   }
   steps.forEach((step, i) => {
    const card = cards[step.card];
    const title = (card.querySelector('h3') || card.querySelector('.person strong') || card.querySelector('.eyebrow'))?.textContent?.trim() || card.getAttribute('aria-label') || '';
    buttons[i].setAttribute('aria-label', `${controls.dataset.show}: ${title}`);
   });
   go(Math.max(0, steps.findLastIndex(step => step.card <= anchor)), true);
  };
  track.addEventListener('scroll', () => {
   clearTimeout(timer); clearTimeout(scrollTimer); update();
   // Also supports browsers without scrollend, including inertial touch scrolling.
   scrollTimer = setTimeout(sync, 180);
  }, { passive: true });
  track.addEventListener('scrollend', () => { clearTimeout(scrollTimer); update(); sync(); });
  root.addEventListener('keydown', event => {
   focused = true; sync();
   if (!(event.target instanceof Node) || (!track.contains(event.target) && !dots.contains(event.target))) return;
   const targets: Record<string, number> = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: steps.length - 1 };
   if (!(event.key in targets)) return;
   event.preventDefault(); go(targets[event.key]);
   if (dots.contains(event.target)) buttons[current].focus();
  });
  root.addEventListener('pointerenter', event => { hovering = mouse.matches && event.pointerType === 'mouse'; sync(); });
  root.addEventListener('pointerleave', () => { hovering = false; sync(); });
  root.addEventListener('focusin', event => { focused = event.target instanceof Element && event.target.matches(':focus-visible'); sync(); });
  root.addEventListener('focusout', event => { focused = event.relatedTarget instanceof Element && root.contains(event.relatedTarget) && event.relatedTarget.matches(':focus-visible'); sync(); });
  root.addEventListener('pointerdown', event => { focused = false; touching = event.pointerType !== 'mouse'; sync(); });
  const release = () => { if (touching) { touching = false; sync(); } };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  track.addEventListener('wheel', sync, { passive: true });
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  mouse.addEventListener('change', () => { if (!mouse.matches) hovering = false; sync(); });
  motion.addEventListener('change', () => { if (motion.matches) go(current, true); sync(); });
  document.addEventListener('visibilitychange', sync);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting && entry.intersectionRatio >= .25; sync(); }, { threshold: .25 }).observe(track);
  new ResizeObserver(layout).observe(track);
  root.classList.add('enhanced');
  controls.hidden = false;
  layout();
 });
}
