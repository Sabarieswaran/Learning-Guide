---
id: interview-questions
title: Performance Interview Questions
sidebar_label: Interview Questions
description: Frontend performance interview questions on Core Web Vitals, Angular optimization, rendering, and network — with complete answers.
---

# Performance Interview Questions

## Easy

**Q: What are Core Web Vitals?**

Three Google metrics that measure real-world user experience:
- **LCP (Largest Contentful Paint)** — loading speed. How long until the largest visible element renders. Target ≤ 2.5s.
- **INP (Interaction to Next Paint)** — responsiveness. Time from user interaction to next visual update. Target ≤ 200ms.
- **CLS (Cumulative Layout Shift)** — visual stability. Sum of unexpected layout shifts. Target ≤ 0.1.

**Q: What does `loading="lazy"` do on an image?**

It defers loading the image until it's about to enter the viewport (via `IntersectionObserver`). Images below the fold are not downloaded on page load, reducing initial payload and improving LCP and Time to Interactive. Always set `loading="eager"` (or omit it) for above-fold images — lazy loading the hero image worsens LCP.

**Q: What causes Cumulative Layout Shift?**

Elements that move after initial render: images without explicit `width`/`height` (reserve no space until loaded), dynamically injected content above existing content, web fonts causing FOUT (Flash of Unstyled Text) that shifts text layout, and ads/embeds with unknown dimensions.

---

## Medium

**Q: How would you improve LCP on an Angular SSR app?**

1. Ensure the LCP element (usually a hero image or heading) is in the server-rendered HTML — not injected after hydration
2. Use `NgOptimizedImage` with `priority` attribute on the LCP image — sets `fetchpriority="high"` and removes lazy loading
3. Preload the LCP image: `<link rel="preload" as="image" href="/hero.webp">`
4. Reduce TTFB — LCP cannot start until the first byte arrives
5. Use WebP/AVIF format — smaller files = faster download = faster LCP

**Q: What is layout thrashing and how do you prevent it?**

Layout thrashing occurs when JavaScript alternates between reading and writing DOM layout properties in a loop, forcing the browser to recalculate layout on every iteration. Reading `offsetWidth` after writing `style.width` forces a synchronous layout. Prevention: batch all reads first, then all writes. Use `requestAnimationFrame` to group DOM writes before the next frame. In Angular, signals help by batching DOM updates in a single change detection flush.

**Q: How does `ChangeDetectionStrategy.OnPush` improve Angular performance?**

Default CD checks every component after every async event. OnPush skips a component unless its input references change, an event originates from it, or `markForCheck()` is called. In a tree of 50 components, a single click with Default triggers 50 checks. With OnPush, only the component the event originated from (and its ancestors) are checked. Combined with signals, only components that read a changed signal are re-rendered.

---

## Hard

**Q: Explain the difference between `will-change: transform` and actually applying a transform.**

`will-change: transform` hints to the browser that this element will animate, causing it to be promoted to its own compositor layer in advance. This avoids the cost of layer promotion during the animation itself. However, each compositor layer uses GPU memory — overusing `will-change` increases memory pressure and can harm performance. Apply it only to elements that actually animate, and remove it after the animation completes. Actually applying `transform: translate(0)` also promotes to a layer but is a heavier-handed approach.

**Q: How would you diagnose a poor INP score in an Angular application?**

1. Use Chrome DevTools Performance panel to record interactions — look for Long Tasks (> 50ms) triggered by clicks
2. Check for expensive `ngOnChanges` or `ngDoCheck` implementations running on every CD cycle
3. Look for synchronous HTTP calls or heavy computations in event handlers
4. Profile with Angular DevTools — the CD profiler shows which components are being checked and why
5. Common fixes: OnPush everywhere, move heavy computation to a Web Worker, debounce rapid-fire events, use `@defer` to avoid loading heavy components before interaction

---

## Senior

**Q: A client's Angular app scores 45 on Lighthouse Performance. Walk me through your debugging process.**

Start with the Lighthouse report — identify which metrics are failing. For LCP: check if it's a render-blocking resource (script/stylesheet), a slow server (TTFB), or a large unoptimized image. For INP: profile with DevTools, look for long tasks correlating with interactions. For CLS: find elements without explicit dimensions.

Then bundle analysis: `ng build --stats-json` + webpack-bundle-analyzer. Look for oversized chunks, duplicated dependencies, or synchronous third-party scripts.

Fix in this priority order: (1) eliminate render-blocking resources, (2) lazy load routes, (3) optimize the LCP image, (4) move long tasks off the main thread, (5) fix CLS sources. Each change should be measured with a new Lighthouse run in a clean profile to isolate improvements.

---

## Cheat Sheet

```
LCP causes:      slow server (TTFB), large unoptimized image, render-blocking JS
LCP fixes:       SSR, NgOptimizedImage+priority, preload, WebP
INP causes:      long tasks, heavy CD, synchronous computation in handlers
INP fixes:       OnPush, signals, Web Workers, debounce, @defer
CLS causes:      images without width/height, dynamic injection above content
CLS fixes:       explicit dimensions, reserved space, font-display:optional

Angular perf checklist:
  loadComponent / loadChildren on all routes
  @defer (on viewport) for below-fold components
  OnPush on every component
  track item.id on every @for
  NgOptimizedImage for all <img>
  takeUntilDestroyed for all subscriptions
```
---

## Related Topics

- **Previous:** [Caching](./caching)
- **Next:** [Cheat Sheet](./cheat-sheet)
- **Related:** [Core Web Vitals](./core-web-vitals)