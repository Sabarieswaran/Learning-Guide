---
id: interview-questions
title: Browser Internals Interview Questions
sidebar_label: Interview Questions
description: Interview questions on rendering pipeline, event loop, memory, storage, and browser security.
---

# Browser Internals Interview Questions

**Q: What is the Critical Rendering Path?**

The sequence the browser follows to display content: parse HTML → build DOM, parse CSS → build CSSOM, combine into Render Tree, Layout (calculate positions), Paint (fill pixels), Composite (assemble layers). Optimizing this path (minimize render-blocking resources, reduce layout complexity) improves Time to First Paint and LCP.

**Q: What causes layout thrashing?**

Reading layout properties (offsetWidth, getBoundingClientRect) after writing style changes forces the browser to synchronously recalculate layout. In a loop, this creates a cycle: write → forced layout → write → forced layout. Solution: batch all reads first, then all writes. Use `requestAnimationFrame` to schedule writes before the next frame.

**Q: How does the browser's event loop handle microtasks and macrotasks?**

After each macrotask (click handler, setTimeout callback), the browser processes all pending microtasks (promise callbacks, queueMicrotask) before doing anything else — including rendering. This means promise callbacks always run before the next setTimeout, and a long microtask chain can block rendering.

**Q: What is a memory leak and how do you detect one in Angular?**

A memory leak is when objects that should be garbage collected remain reachable. In Angular, common causes: unsubscribed observables, DOM event listeners not removed on destroy, closures holding references to large objects. Detect with Chrome DevTools Memory tab: take heap snapshots before and after reproducing the leak, then compare retained objects.

**Q: Explain CORS and how it works.**

CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts web pages from making HTTP requests to a different origin (protocol + domain + port). When a request is cross-origin, the browser sends a preflight OPTIONS request to check if the server allows it. The server responds with `Access-Control-Allow-Origin` and other headers. The browser only completes the actual request if the origin is allowed.

---

## Cheat Sheet

```
Rendering pipeline:
  Parse HTML/CSS → Style → Layout → Paint → Composite

Layout triggers (expensive):
  width, height, top, left, margin, padding, font-size

Paint triggers:
  background, color, box-shadow, border-color

Compositor only (cheap, 60fps):
  transform, opacity

Storage:
  localStorage = sync, 5MB, persists
  sessionStorage = sync, 5MB, tab-only
  IndexedDB = async, large, persists
  httpOnly cookie = server-set, XSS-safe

Security:
  XSS → Angular escapes interpolations
  CSRF → Angular sends XSRF token header
  CSP → restrict resource sources via HTTP headers
```
---

## Related Topics

- **Previous:** [Security](./security)
- **Next:** [Cheat Sheet](./cheat-sheet)
- **Related:** [JavaScript Event Loop](/docs/javascript/event-loop)