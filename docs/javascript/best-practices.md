---
id: best-practices
title: JavaScript Best Practices
sidebar_label: Best Practices
description: JavaScript best practices for production Angular applications — code quality, performance, security, and maintainability.
---

# JavaScript Best Practices

## Variables and Immutability

```javascript
// Prefer const — signals intent, prevents accidental reassignment
const MAX_RETRIES = 3;
const user = { name: 'Alice' }; // const doesn't prevent mutation!

// Use let only when reassignment is needed
let retryCount = 0;

// Never use var — unpredictable scoping
```

## Equality

```javascript
// Always use === (strict equality)
'1' === 1   // false — correct
'1' == 1    // true — coercion surprise, avoid

// Null checks
value === null              // null only
value === undefined         // undefined only
value == null               // null OR undefined (the one case == is acceptable)
value !== null && value !== undefined  // explicit null guard
```

## Functions

```javascript
// Short functions are easier to test and reason about
// Single responsibility — one function does one thing

// Prefer named arrow functions for callbacks
const sortByAge = (a, b) => a.age - b.age;
users.sort(sortByAge); // easier to read than inline

// Use default parameters over conditionals
function greet(name = 'World') { return `Hello, ${name}`; }

// Return early to reduce nesting
function process(data) {
  if (!data) return null;
  if (!data.isValid) return { error: 'Invalid' };
  return transform(data);
}
```

## Arrays — Prefer Non-Mutating Methods

```javascript
// Mutations (avoid with signals/immutable state)
arr.push(item)    → [...arr, item]
arr.splice(i, 1)  → arr.filter((_, idx) => idx !== i)
arr.sort()        → [...arr].sort()
arr.reverse()     → [...arr].reverse()

// Non-mutating (safe with signals)
const newArr = arr.map(transform);
const filtered = arr.filter(predicate);
const total = arr.reduce((sum, n) => sum + n, 0);
```

## Async Code

```javascript
// Always handle errors in async functions
async function fetchUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    // Don't swallow errors silently
    console.error('fetchUser failed:', e);
    throw e; // re-throw for caller to handle
  }
}

// Parallel when independent
const [user, posts] = await Promise.all([getUser(id), getPosts(id)]);

// Sequential only when dependent
const user = await getUser(id);
const posts = await getUserPosts(user.teamId); // needs user first
```

## Security

```javascript
// Never interpolate user input into HTML
element.innerHTML = userInput;  // XSS risk

// Use textContent for text
element.textContent = userInput; // safe

// Never use eval()
eval(userCode); // executes arbitrary code

// Sanitize URLs before setting
const url = new URL(userUrl); // throws if invalid
element.href = url.href;
```

## Angular-Specific

```typescript
// Always type your signals
const count = signal<number>(0);       // not signal(0) alone
const user = signal<User | null>(null); // explicit null

// Use readonly signals for public APIs
private readonly _state = signal<State>(initial);
readonly state = this._state.asReadonly();

// Always track in @for
@for (item of items(); track item.id) { }
```

---

## Related Topics

- **Previous:** [Storage](./storage)
- **Next:** [Interview Questions](./interview-questions)
- **Related:** [TypeScript Best Practices](/docs/typescript/best-practices)
