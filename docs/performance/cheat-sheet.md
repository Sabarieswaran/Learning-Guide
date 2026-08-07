---
id: cheat-sheet
title: Performance Cheat Sheet
sidebar_label: Cheat Sheet
description: Frontend performance quick reference — Core Web Vitals, Angular optimizations, network, and measurement tools.
---

# Performance Cheat Sheet

## Core Web Vitals

```
LCP (Largest Contentful Paint)
  Good: ≤ 2.5s  |  Needs work: 2.5–4s  |  Poor: > 4s
  Fix: SSR, priority images, eliminate render-blocking

INP (Interaction to Next Paint)
  Good: ≤ 200ms  |  Needs work: 200–500ms  |  Poor: > 500ms
  Fix: OnPush, signals, virtual scroll, web workers

CLS (Cumulative Layout Shift)
  Good: ≤ 0.1  |  Needs work: 0.1–0.25  |  Poor: > 0.25
  Fix: img width+height, reserve space for dynamic content
```

## Angular Performance Checklist

```
Bundle:
  ✓ loadComponent/loadChildren for all routes
  ✓ @defer for non-critical components
  ✓ Replace moment.js, lodash with smaller alternatives
  ✓ ng build --stats-json + bundle analyzer

Change Detection:
  ✓ ChangeDetectionStrategy.OnPush everywhere
  ✓ track item.id in all @for loops
  ✓ Signals for reactive state
  ✓ takeUntilDestroyed for observable cleanup

Rendering:
  ✓ CdkVirtualScrollViewport for long lists
  ✓ NgOptimizedImage for all img elements
  ✓ priority attribute on above-fold images
```

## Network

```
Caching headers:
  Static assets (hashed): Cache-Control: max-age=31536000, immutable
  HTML: Cache-Control: no-cache
  API: Cache-Control: private, max-age=300

Resource hints:
  <link rel="preconnect" href="...">   → early connection
  <link rel="preload" as="font">       → critical font
  <link rel="prefetch">                → next page

Image formats (best → fallback):
  AVIF → WebP → JPEG/PNG
```

## Measurement Tools

```
Lighthouse:      npx lighthouse https://url --output=html
Bundle:          ng build --stats-json + webpack-bundle-analyzer
Chrome DevTools: Performance tab → record → look for Long Tasks
Angular DevTools: Change detection profiler extension
Field data:      Google Search Console → Core Web Vitals
```

## CSS Animation Performance

```
✓ Only animate: transform, opacity (compositor thread)
✗ Avoid animating: width, height, top, left (layout thread)
✓ Use will-change: transform on elements that animate
✓ @media (prefers-reduced-motion: reduce) { remove animations }
```
