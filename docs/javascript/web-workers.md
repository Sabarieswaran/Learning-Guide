---
id: web-workers
title: JavaScript Web Workers
sidebar_label: Web Workers
description: Web Workers for off-main-thread computation — keeping Angular apps responsive during heavy operations.
---

# JavaScript Web Workers

## Introduction

Web Workers run JavaScript in a separate thread, leaving the main thread free for UI updates. They communicate via message passing — no shared memory, no direct DOM access.

---

## Basic Worker

```javascript
// worker.js
self.onmessage = function(e) {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

// main.js
const worker = new Worker('./worker.js');
worker.onmessage = (e) => console.log('Result:', e.data);
worker.postMessage(largeDataset);
```

---

## Angular + Web Workers

```bash
ng generate web-worker app
```

```typescript
// app.component.ts
@Component({ standalone: true })
export class AppComponent {
  processData(data: LargeDataset) {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => this.result.set(data);
      worker.postMessage(data);
    }
  }
}

// app.worker.ts
addEventListener('message', ({ data }) => {
  const result = expensiveTransform(data);
  postMessage(result);
});
```

## When to Use Workers

- Parsing large JSON responses
- Processing images or videos
- Complex mathematical calculations
- Encryption/decryption
- Search indexing

**Do not use** for DOM manipulation, HTTP requests (use service workers instead), or operations that need synchronous access to component state.

---

## Related Topics

- **Related:** [Browser Internals](/docs/browser/introduction)
- **Related:** [Performance Introduction](/docs/performance/introduction)
---

## Related Topics

- **Previous:** [Fetch API](./fetch-api)
- **Next:** [Storage](./storage)
- **Related:** [Browser Internals](/docs/browser/introduction)
- **Related:** [Performance Introduction](/docs/performance/introduction)