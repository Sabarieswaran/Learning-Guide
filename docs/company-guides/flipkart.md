---
id: flipkart
title: Flipkart Frontend Interview Guide
sidebar_label: Flipkart
description: Flipkart frontend interview process — machine coding, DSA, performance at e-commerce scale.
---

# Flipkart — Frontend Interview Guide

## Overview

Flipkart is India's largest e-commerce platform. The frontend team handles enormous scale — millions of concurrent users, complex product pages, and performance-critical checkout flows. Interviews strongly emphasize **machine coding**, **DSA**, and **React or Angular proficiency**.

---

## Interview Process

Typically 5 rounds:

| Round | Focus |
|---|---|
| Online Assessment | DSA — arrays, trees, DP |
| Machine Coding | Build a UI feature (90 min) |
| Technical 1 | JavaScript, React/Angular depth |
| Technical 2 | System design (frontend) |
| HR | Cultural fit, compensation |

---

## Key Focus Areas

### Machine Coding (Most Important)
Flipkart's machine coding round is demanding:
- Build a shopping cart with add/remove/quantity controls
- Implement an infinite scroll product grid
- Create a star rating component with half-star support

### DSA
More DSA-heavy than most frontend companies:
- Array manipulation, sorting, searching
- Tree traversal (important for category trees and navigation)
- Memoization and dynamic programming

### Performance at E-commerce Scale
- Lazy loading images below the fold
- Skeleton screens and progressive loading
- SSR for product pages (SEO + LCP improvement)
- Core Web Vitals optimization for mobile-first users

---

## Frequently Asked Questions

**Q: How would you optimize an Angular product listing page for mobile users with slow connections?**

Server-side render the initial product grid with Angular SSR for fast LCP. Use `NgOptimizedImage` with explicit `width` and `height` to prevent layout shift (CLS). Lazy-load images below the fold with `loading="lazy"`. Implement skeleton screens for perceived performance. Use `@defer` for non-critical components like reviews and recommendations. Apply route-level code splitting for the checkout flow.

**Q: Build a shopping cart in Angular (machine coding).**

Start by defining interfaces: `CartItem { productId, name, price, quantity, imageUrl }`. Create a `CartService` with a `signal<CartItem[]>([])` for state. Computed signals for `itemCount` and `total`. Methods: `addItem()`, `removeItem()`, `updateQuantity()`. Components: `CartIconComponent` (shows count in nav), `CartDrawerComponent` (side panel), `CartItemComponent` (individual row). Use Angular CDK overlay for the drawer animation.

---

## Related Topics

- **Related:** [Machine Coding Introduction](/docs/machine-coding/introduction)
- **Related:** [Angular Signals](/docs/angular/signals)
---

## Related Topics

- **Previous:** [Adobe Guide](./adobe)
- **Next:** [Oracle Guide](./oracle)
- **Related:** [Machine Coding Introduction](/docs/machine-coding/introduction)
- **Related:** [Angular Signals](/docs/angular/signals)