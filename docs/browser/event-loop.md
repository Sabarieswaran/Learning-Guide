---
id: event-loop
title: Browser Event Loop
sidebar_label: Event Loop
description: The browser event loop — task queue, microtask queue, rendering pipeline, and requestAnimationFrame timing.
---

# Browser Event Loop

## The Loop

The browser runs an event loop that processes tasks, microtasks, and renders in a specific order:

```
1. Pick one macrotask from the task queue
2. Run it to completion
3. Process ALL microtasks
4. Render (if needed — approximately every 16ms for 60fps)
5. Run requestAnimationFrame callbacks
6. Repeat
```

## Task Types

**Macrotasks:**
- `setTimeout`, `setInterval` callbacks
- I/O callbacks
- UI event handlers (click, keydown)
- `MessageChannel` callbacks

**Microtasks (run after EVERY task):**
- `Promise.then/.catch/.finally`
- `queueMicrotask()`
- `MutationObserver` callbacks
- `async/await` continuations

## requestAnimationFrame

`rAF` runs just before rendering, after microtasks:

```javascript
function animate() {
  // This runs before each frame is painted
  element.style.transform = `translateX(${x}px)`;
  x++;
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

Use `rAF` for smooth animations. Don't use `setInterval` for animation — it fires regardless of frame timing.

## Zone.js and the Event Loop

Zone.js patches all browser async APIs (setTimeout, Promise, addEventListener, fetch). This allows Angular to know when any async operation completes and run change detection.

---

## Related Topics

- **Previous:** [Rendering Pipeline](./rendering-pipeline)
- **Next:** [Memory Management](./memory-management)
- **Related:** [JavaScript Event Loop](/docs/javascript/event-loop)
