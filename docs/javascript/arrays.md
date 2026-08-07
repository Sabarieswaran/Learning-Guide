---
id: arrays
title: JavaScript Arrays
sidebar_label: Arrays
description: Array methods, immutable patterns, typed arrays, and array performance in Angular applications.
---

# JavaScript Arrays

## Core Array Methods

```javascript
// Non-mutating — return new array (prefer these)
arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.reduce((acc, x) => acc + x, 0)
arr.slice(1, 4)       // [index 1, index 2, index 3]
arr.concat([4, 5])    // [...arr, 4, 5]
arr.flat()            // flatten one level
arr.flatMap(x => [x, x + 1])

// Search
arr.find(x => x.id === id)
arr.findIndex(x => x.id === id)
arr.some(x => x > 5)
arr.every(x => x > 0)
arr.includes(value)

// Iteration
arr.forEach(x => {})
for (const item of arr) {}
for (const [i, item] of arr.entries()) {}
```

## Immutable Update Patterns (Essential for Angular Signals)

```javascript
const users = signal<User[]>([]);

// Add
users.update(list => [...list, newUser]);

// Remove
users.update(list => list.filter(u => u.id !== id));

// Update one
users.update(list =>
  list.map(u => u.id === id ? { ...u, ...changes } : u)
);

// Sort (returns new array)
users.update(list => [...list].sort((a, b) => a.name.localeCompare(b.name)));
```

## Array Destructuring

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const [a, , b] = [1, 2, 3]; // skip element
const [x = 0, y = 0] = getPoint(); // defaults
```

---

## Related Topics

- **Previous:** [Objects](./objects)
- **Next:** [Classes](./classes)
