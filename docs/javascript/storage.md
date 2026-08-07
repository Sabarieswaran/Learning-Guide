---
id: storage
title: Browser Storage APIs
sidebar_label: Storage
description: localStorage, sessionStorage, IndexedDB, cookies — when to use each and security considerations.
---

# Browser Storage APIs

## localStorage

Persists across sessions, ~5-10MB, synchronous:

```javascript
localStorage.setItem('user', JSON.stringify(user));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');
localStorage.clear();
```

**Do not store:** JWTs, passwords, sensitive data — readable by any JS on the page (XSS risk).

## sessionStorage

Same API, clears when tab closes:

```javascript
sessionStorage.setItem('formState', JSON.stringify(state));
```

Good for: form state, temporary filters, tab-specific data.

## IndexedDB

Asynchronous, large storage (hundreds of MB), structured data:

```typescript
// Use with a wrapper library like idb
import { openDB } from 'idb';

const db = await openDB('my-app', 1, {
  upgrade(db) {
    db.createObjectStore('products', { keyPath: 'id' });
  },
});

await db.put('products', { id: 1, name: 'Product A' });
const product = await db.get('products', 1);
```

## Cookies

Used by server for authentication (httpOnly). Client can set non-httpOnly cookies:

```javascript
document.cookie = 'theme=dark; max-age=31536000; SameSite=Strict';
```

## When to Use What

| Storage | Size | Persists | Use For |
|---|---|---|---|
| localStorage | ~5MB | Across sessions | Theme, language preferences |
| sessionStorage | ~5MB | Tab lifetime | Form state, search filters |
| IndexedDB | Hundreds MB | Across sessions | Offline data, large datasets |
| Cookies (httpOnly) | ~4KB | Configurable | Auth tokens (server sets) |

---

## Related Topics

- **Related:** [Browser Security](/docs/browser/security)
- **Related:** [Browser Storage Deep Dive](/docs/browser/storage)
