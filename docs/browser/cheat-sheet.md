---
id: cheat-sheet
title: Browser Internals Cheat Sheet
sidebar_label: Cheat Sheet
description: Browser internals quick reference — rendering, event loop, memory, storage, and security.
---

# Browser Internals Cheat Sheet

## Rendering Pipeline

```
HTML Bytes → DOM
CSS Bytes  → CSSOM
DOM + CSSOM → Render Tree → Layout → Paint → Composite

Layout-triggering properties:
  width, height, top, left, margin, padding, flex, grid
Paint-only properties:
  background, color, box-shadow, border
Compositor-only (cheapest):
  transform, opacity
```

## Event Loop Order

```
1. One macrotask (setTimeout, click, I/O)
2. All microtasks (Promise, queueMicrotask, MutationObserver)
3. requestAnimationFrame callbacks
4. Render (if frame due)
5. Repeat
```

## Memory Lifecycle

```
Allocate → Use → Release (GC)

Angular leak causes:
  - Unsubscribed observables
  - Unreleased DOM event listeners
  - Closures holding large objects
  - setInterval without clearInterval

Detection: Chrome DevTools → Memory → Heap Snapshot comparison
```

## Storage Summary

```
localStorage      5MB   Sync  Session+
sessionStorage    5MB   Sync  Tab only
IndexedDB         500MB Async Session+
Cache API         500MB Async Session+
Cookie (httpOnly) 4KB   N/A   Configurable
```

## Security Headers

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
```
---

## Related Topics

- **Previous:** [Interview Questions](./interview-questions)
- **Related:** [Browser Introduction](./introduction)