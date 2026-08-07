---
id: async-await
title: Async/Await
sidebar_label: Async/Await
description: Async/await syntax, error handling, parallel vs sequential execution, and common pitfalls.
---

# Async/Await

## Introduction

`async/await` is syntactic sugar over Promises. An `async` function always returns a Promise. `await` pauses execution until the Promise settles and returns the resolved value.

---

## Basic Usage

```javascript
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

// Consume
const user = await fetchUser('123');
```

---

## Error Handling

```javascript
// try/catch
async function loadData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error('Failed to load:', error);
    return null; // fallback
  } finally {
    hideLoading();
  }
}
```

---

## Sequential vs Parallel

```javascript
// Sequential — each awaits the previous (slow)
const user = await getUser(id);
const posts = await getPosts(id);      // waits for user first
const comments = await getComments(id); // waits for posts first

// Parallel — all start simultaneously (fast)
const [user, posts, comments] = await Promise.all([
  getUser(id),
  getPosts(id),
  getComments(id),
]);
```

---

## Angular Service Pattern

```typescript
@Injectable({ providedIn: 'root' })
export class DataService {
  async loadDashboard(userId: string): Promise<DashboardData> {
    const [user, metrics, notifications] = await Promise.all([
      firstValueFrom(this.http.get<User>(`/api/users/${userId}`)),
      firstValueFrom(this.http.get<Metrics>(`/api/metrics/${userId}`)),
      firstValueFrom(this.http.get<Notification[]>('/api/notifications')),
    ]);
    return { user, metrics, notifications };
  }
}
```

---

## Related Topics

- **Previous:** [Promises](./promises)
- **Next:** [Modules](./modules)
- **Related:** [RxJS Introduction](/docs/rxjs/introduction)
