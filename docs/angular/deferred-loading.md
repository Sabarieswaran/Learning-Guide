---
id: deferred-loading
title: Angular Deferred Loading (@defer)
sidebar_label: Deferred Loading
description: Angular's @defer blocks for component-level lazy loading — triggers, states, prefetching, and performance impact on LCP and bundle size.
---

# Angular Deferred Loading

## Introduction

`@defer` blocks allow Angular to defer the loading and rendering of a component subtree until a specific trigger condition is met. This is Angular's most powerful tool for improving initial page load performance.

---

## Why It Matters

Without `@defer`, all components in a route's component tree are bundled together and rendered immediately. With `@defer`:

- Components load in separate chunks (automatic code splitting)
- Browser downloads only what the user will interact with
- First contentful paint is faster — fewer bytes to parse
- LCP improves for content-heavy pages

---

## Trigger Reference

```html
<!-- Viewport — loads when placeholder enters viewport -->
@defer (on viewport) {
  <app-analytics-chart />
}

<!-- Idle — loads when browser is idle (requestIdleCallback) -->
@defer (on idle) {
  <app-recommendation-engine />
}

<!-- Interaction — loads when user clicks/touches the placeholder -->
@defer (on interaction) {
  <app-comment-section />
}

<!-- Hover -->
@defer (on hover) {
  <app-tooltip-content />
}

<!-- Timer -->
@defer (on timer(2000)) {
  <app-cookie-banner />
}

<!-- Custom condition -->
@defer (when featureFlags().showNewDashboard) {
  <app-new-dashboard />
} @placeholder {
  <app-old-dashboard />
}
```

---

## Prefetching

Load the bundle early but render later:

```html
<!-- Prefetch when browser is idle, render when in viewport -->
@defer (on viewport; prefetch on idle) {
  <app-heavy-map />
} @placeholder {
  <div class="map-placeholder">Map loading...</div>
}
```

---

## Production Example — Product Page

```html
<!-- Priority content: loads immediately -->
<app-product-hero [product]="product()" />
<app-product-price [product]="product()" />
<app-add-to-cart [product]="product()" />

<!-- Below the fold: defer everything -->
@defer (on viewport) {
  <app-product-images [images]="product().images" />
} @placeholder {
  <div class="image-gallery-skeleton"></div>
}

@defer (on viewport) {
  <app-product-reviews [productId]="product().id" />
} @placeholder {
  <div class="reviews-skeleton"></div>
} @loading {
  <app-spinner />
}

@defer (on idle) {
  <app-related-products [category]="product().category" />
}
```

---

## Interview Questions

**Q: What is the difference between `@defer (on viewport)` and `@defer (on idle)`?**

`on viewport` loads when the `@placeholder` content enters the browser's viewport. It's driven by `IntersectionObserver`. `on idle` loads when the browser's main thread is idle, using `requestIdleCallback`. Use `on viewport` for content visible after scrolling. Use `on idle` for non-critical features that should load without impacting interactivity.

**Q: How does @defer affect bundle size and LCP?**

`@defer` automatically splits the component (and its transitive dependencies) into a separate lazy chunk. The router no longer needs to include that code in the initial bundle. LCP improves because the browser downloads and parses fewer bytes before rendering above-the-fold content. The initial bundle shrinks, Time to Interactive improves, and Lighthouse scores increase.

---

## Related Topics

- **Previous:** [Control Flow](./control-flow)
- **Related:** [Angular Performance](./bundle-optimization)
- **Related:** [Performance Introduction](/docs/performance/introduction)
