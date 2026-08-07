---
id: generators
title: JavaScript Generators
sidebar_label: Generators
description: Generator functions, iterators, infinite sequences, and practical use cases in Angular.
---

# JavaScript Generators

## Generator Functions

A generator function returns an iterator. Execution pauses at each `yield` and resumes when `.next()` is called:

```javascript
function* sequence() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = sequence();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }
```

## Infinite Sequences

```javascript
function* naturals(start = 0) {
  while (true) yield start++;
}

const nums = naturals(1);
// Take first N
const first10 = Array.from({ length: 10 }, () => nums.next().value);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Practical Use Cases

```javascript
// Pagination
function* paginate(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

// ID generator
function* idGenerator(prefix = 'item') {
  let n = 0;
  while (true) yield `${prefix}-${++n}`;
}

const nextId = idGenerator('user');
nextId.next().value // 'user-1'
nextId.next().value // 'user-2'
```

## Interview Context

Generators are asked less frequently than closures/promises but can appear in:
- Senior-level JS internals questions
- Custom iterator protocol questions
- Questions about lazy evaluation

---

## Related Topics

- **Previous:** [Modules](./modules)
- **Related:** [JavaScript Interview Questions](./interview-questions)
