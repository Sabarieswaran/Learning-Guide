---
id: functions
title: JavaScript Functions
sidebar_label: Functions
description: Function declarations, expressions, arrow functions, this binding, and higher-order functions.
---

# JavaScript Functions

## Function Types

```javascript
// Declaration — hoisted
function add(a, b) { return a + b; }

// Expression — not hoisted
const multiply = function(a, b) { return a * b; };

// Arrow function — no own 'this', not hoistable
const divide = (a, b) => a / b;
const square = n => n ** 2;
const getObj = () => ({ key: 'value' }); // wrapped in () to return object

// Named function expression — useful for recursion and stack traces
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
```

## `this` Binding

```javascript
const obj = {
  name: 'Alice',
  greet() { return `Hi, ${this.name}`; },            // 'this' = obj
  greetArrow: () => `Hi, ${this.name}`,             // 'this' = outer context
};

// Explicit binding
greet.call(obj);
greet.apply(obj, [arg1, arg2]);
const bound = greet.bind(obj); // returns new function

// Arrow functions capture 'this' from enclosing scope
class Timer {
  tick() {
    setInterval(() => {
      this.count++; // 'this' = Timer instance (arrow captures it)
    }, 1000);
  }
}
```

## Higher-Order Functions

```javascript
// Function that accepts a function
function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}

// Function that returns a function (factory)
function multiplier(factor) {
  return (n) => n * factor;
}

// Composing functions
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
```

---

## Related Topics

- **Previous:** [Variables](./variables)
- **Next:** [Objects](./objects)
