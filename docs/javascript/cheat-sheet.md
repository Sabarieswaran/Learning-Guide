---
id: cheat-sheet
title: JavaScript Cheat Sheet
sidebar_label: Cheat Sheet
description: JavaScript quick reference — ES6+ features, array methods, object methods, async patterns.
---

# JavaScript Cheat Sheet

## Variables and Scope

```javascript
var x = 1;          // function scope, hoisted
let y = 2;          // block scope
const z = 3;        // block scope, no reassign

// Destructuring
const { name, age } = user;
const { name: userName } = user;        // rename
const { name = 'Anonymous' } = user;    // default
const [first, second, ...rest] = array;
const [a, , b] = [1, 2, 3];            // skip element
```

---

## Functions

```javascript
// Arrow function
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}`;

// Default parameters
function greet(name = 'World') { return `Hello, ${name}`; }

// Rest parameters
function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }

// Spread
const arr2 = [...arr1, 4, 5];
const obj2 = { ...obj1, extra: true };
```

---

## Array Methods

```javascript
// Transformation
arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.reduce((acc, x) => acc + x, 0)
arr.flatMap(x => [x, x * 2])
arr.flat(2)                    // flatten 2 levels

// Search
arr.find(x => x.id === id)
arr.findIndex(x => x.id === id)
arr.includes(value)
arr.some(x => x > 0)
arr.every(x => x > 0)
arr.indexOf(value)

// Mutation (return new array instead)
[...arr].sort((a, b) => a - b)
arr.slice(start, end)
[...arr, item]                 // add
arr.filter(x => x !== item)    // remove
arr.map(x => x.id === id ? {...x, ...changes} : x) // update

// Iteration
arr.forEach(x => console.log(x))
for (const item of arr) {}
```

---

## Object Methods

```javascript
Object.keys(obj)         // ['key1', 'key2']
Object.values(obj)       // [val1, val2]
Object.entries(obj)      // [['key1', val1], ...]
Object.assign({}, obj)   // shallow copy
Object.freeze(obj)       // immutable
Object.fromEntries(entries)

const copy = { ...obj, newProp: 'value' };  // spread copy + merge
```

---

## Async Patterns

```javascript
// Promise chain
fetch(url).then(r => r.json()).then(use).catch(handleError)

// Async/await
async function load() {
  try {
    const data = await fetch(url).then(r => r.json());
    return data;
  } catch (e) { return fallback; }
}

// Parallel
const [a, b] = await Promise.all([fetchA(), fetchB()]);
const results = await Promise.allSettled([fetchA(), fetchB()]);
```

---

## Classes and Prototypes

```javascript
class Animal {
  #name;                         // private field
  constructor(name) { this.#name = name; }
  get name() { return this.#name; }
  speak() { return `${this.#name} makes a sound.`; }
  static create(name) { return new Animal(name); }
}

class Dog extends Animal {
  speak() { return `${this.name} barks.`; }
}
```

---

## Useful Operators

```javascript
user?.address?.city        // optional chaining
user ?? 'Guest'            // nullish coalescing (null/undefined)
user ||= defaultUser       // assign if falsy
count ??= 0                // assign if null/undefined
```
