---
id: closures
title: JavaScript Closures
sidebar_label: Closures
description: Lexical scope, closure creation, practical use cases, and how Angular services use closures internally.
---

# JavaScript Closures

## Introduction

A closure is a function that retains access to its lexical scope — the variables from its enclosing scope — even after the outer function has returned. Closures are not a special syntax; they are a consequence of how JavaScript resolves variable names.

---

## How Closures Work

```javascript
function createCounter(initialValue = 0) {
  let count = initialValue; // captured in closure

  return {
    increment() { count++; },
    decrement() { count--; },
    getValue() { return count; },
  };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
console.log(counter.getValue()); // 12

// count is not accessible from outside
console.log(count); // ReferenceError
```

The returned object's methods form closures over `count`. The variable lives as long as the closures do.

---

## Closures in Angular Services

```typescript
// Angular's inject() uses closures to capture the injection context
@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _users = signal<User[]>([]);

  // This getter forms a closure over _users
  get users() {
    return this._users.asReadonly(); // captures _users from outer scope
  }

  // Factory pattern using closures
  createUserAction(userId: string) {
    return () => {
      // captures userId from outer scope
      return this.deleteUser(userId);
    };
  }
}
```

---

## The Classic Loop Closure Bug

```javascript
// Bug — all callbacks capture the same 'i' variable
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3, 3, 3 (not 0, 1, 2)

// Fix 1 — use let (block-scoped, new binding per iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 0, 1, 2

// Fix 2 — IIFE (creates new scope per iteration)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}
```

---

## Module Pattern

```javascript
const cache = (() => {
  const store = new Map(); // private

  return {
    get: (key) => store.get(key),
    set: (key, value) => store.set(key, value),
    has: (key) => store.has(key),
    clear: () => store.clear(),
  };
})();
```

---

## Interview Questions

**Q: What is a closure and why is it useful?**

A closure is a function that captures variables from its enclosing scope. It's useful for: encapsulating private state (module pattern), factory functions that customize behavior, memoization, and partial application. The variables captured in a closure persist as long as the closure exists — they're not garbage collected.

**Q: What is the difference between a closure and a regular function?**

All functions in JavaScript have access to their lexical scope — so technically all functions form closures. The meaningful distinction is when a function accesses variables from a scope that has already completed execution (the outer function has returned). That's when the closure "holds onto" variables that would otherwise be garbage collected.

---

## Cheat Sheet

```javascript
// Closure captures outer scope
function outer() {
  let x = 10;
  return function inner() {
    return x; // accesses x from outer scope
  };
}

// Factory pattern
function multiplier(factor) {
  return (n) => n * factor; // captures factor
}
const double = multiplier(2);
const triple = multiplier(3);

// Memoization
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
```

---

## Related Topics

- **Previous:** [Event Loop](./event-loop)
- **Next:** [Promises](./promises)
- **Related:** [Angular Services](/docs/angular/services)
