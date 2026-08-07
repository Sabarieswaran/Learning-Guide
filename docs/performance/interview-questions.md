---
id: interview-questions
title: Performance Interview Questions
sidebar_label: Interview Questions
description: Frontend performance interview questions — Core Web Vitals, Angular optimization, and network performance.
---

# Performance Interview Questions

**Q: What are Core Web Vitals and what are the targets?**

LCP (Largest Contentful Paint) — time until largest element renders, target ≤ 2.5s. INP (Interaction to Next Paint) — response time from interaction to visual update, target ≤ 200ms. CLS (Cumulative Layout Shift) — visual stability score, target ≤ 0.1.

**Q: How would you reduce the LCP of an Angular SPA?**

Enable Angular SSR (server-side rendering) so the browser receives HTML instead of waiting for JavaScript. Preload critical fonts with `<link rel="preload">`. Use `NgOptimizedImage` with `priority` on the hero image. Lazy load non-critical routes. Remove render-blocking scripts.

**Q: What is layout thrashing and how do you fix it?**

Reading layout properties (offsetWidth, getBoundingClientRect) after writing style changes forces synchronous layout calculation. In a loop, this reads → layout → write → read → layout (thrashes). Fix by batching all reads first, then all writes. Angular component lifecycle separates read and write phases naturally.

**Q: How do Angular Signals improve INP?**

Signals create a fine-grained dependency graph. When a signal changes, only components that read that signal are re-rendered. This reduces the JavaScript work per interaction compared to Zone.js-based change detection which checks every component after any async event. Fewer components re-rendered = less JavaScript execution = lower INP.

**Q: Explain the difference between `prefetch` and `preload`.**

`<link rel="preload">` fetches resources needed for the current page as high priority — critical fonts, hero images, above-fold CSS. `<link rel="prefetch">` fetches resources needed for likely future navigation at low priority during idle time — next page's JavaScript bundle. Preload is for now; prefetch is for next.

---

## Cheat Sheet

```
LCP optimization:
  1. SSR → HTML arrives immediately
  2. priority on hero image
  3. Preload critical fonts
  4. Lazy load below-fold routes

INP optimization:
  1. Signals → targeted change detection
  2. OnPush everywhere
  3. Web Workers for heavy computation
  4. Virtual scrolling for long lists

CLS optimization:
  1. Set width/height on all images
  2. Reserve space for dynamic content
  3. font-display: optional/swap

Bundle optimization:
  1. loadComponent for every route
  2. @defer for non-critical components
  3. Replace heavy libraries
  4. Analyze with webpack-bundle-analyzer
```
