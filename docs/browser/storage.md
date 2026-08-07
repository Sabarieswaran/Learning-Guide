---
id: storage
title: Browser Storage
sidebar_label: Storage
description: localStorage, sessionStorage, IndexedDB, cookies, Cache API, and security considerations.
---

# Browser Storage

## Storage Comparison

| API | Capacity | Persists | Access | Use Case |
|---|---|---|---|---|
| localStorage | ~5-10MB | Session + | Synchronous | Preferences, settings |
| sessionStorage | ~5MB | Tab lifetime | Synchronous | Tab-specific state |
| IndexedDB | Hundreds MB | Session + | Asynchronous | Large datasets, offline |
| Cache API | Hundreds MB | Session + | Asynchronous | HTTP caches, PWA |
| Cookies | ~4KB | Configurable | Synchronous | Auth (httpOnly) |

## localStorage

```javascript
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
localStorage.removeItem('theme');
localStorage.clear();

// Store objects
localStorage.setItem('user', JSON.stringify({ id: '1', name: 'Alice' }));
const user = JSON.parse(localStorage.getItem('user') ?? 'null');
```

**Never store:** JWTs, passwords, sensitive user data.

## IndexedDB with idb Library

```typescript
import { openDB, IDBPDatabase } from 'idb';

@Injectable({ providedIn: 'root' })
export class OfflineStorageService {
  private db!: IDBPDatabase;

  async init() {
    this.db = await openDB('my-app', 1, {
      upgrade(db) {
        db.createObjectStore('documents', { keyPath: 'id' });
        db.createObjectStore('userPrefs');
      },
    });
  }

  async saveDocument(doc: Document) {
    await this.db.put('documents', doc);
  }

  async getDocument(id: string): Promise<Document | undefined> {
    return this.db.get('documents', id);
  }
}
```

## Security

- **XSS:** Any JavaScript on the page can read localStorage — never store sensitive tokens
- **CSRF:** Cookies with `SameSite=Strict` prevent cross-site request forgery
- **httpOnly cookies:** Cannot be accessed by JavaScript — safest for auth tokens (set by server)

---

## Related Topics

- **Previous:** [Memory Management](./memory-management)
- **Next:** [Security](./security)
