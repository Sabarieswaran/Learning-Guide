---
id: fetch-api
title: JavaScript Fetch API
sidebar_label: Fetch API
description: Using the Fetch API for HTTP requests, error handling, request configuration, and Angular's HttpClient comparison.
---

# JavaScript Fetch API

## Basic Usage

```javascript
const response = await fetch('/api/users');
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const users = await response.json();
```

## Request Configuration

```javascript
const response = await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify(payload),
  signal: AbortController.signal, // cancellation
  credentials: 'include',         // send cookies
});
```

## Cancellation

```javascript
const controller = new AbortController();

// Cancel after 5 seconds
const timeout = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(timeout);
} catch (e) {
  if (e.name === 'AbortError') console.log('Request cancelled');
}
```

## Angular's HttpClient vs Fetch

| Feature | Fetch | Angular HttpClient |
|---|---|---|
| Observables | No | Yes |
| Interceptors | No | Yes |
| Type safety | Manual | Generic `<T>` |
| Testing | Manual mocking | `HttpClientTestingModule` |
| Progress | Manual | `reportProgress: true` |

In Angular, always use `HttpClient`. Use native `fetch` only for edge cases (SSR route handlers, web workers).

---

## Related Topics

- **Related:** [RxJS Introduction](/docs/rxjs/introduction)
- **Related:** [Angular Services](/docs/angular/services)
