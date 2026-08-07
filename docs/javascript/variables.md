---
id: variables
title: JavaScript Variables and Scope
sidebar_label: Variables
description: var, let, const, hoisting, the temporal dead zone, and block scope in JavaScript.
---

# JavaScript Variables and Scope

## var, let, const

```javascript
// var — function scoped, hoisted with undefined
function example() {
  console.log(x); // undefined (hoisted)
  var x = 5;
  console.log(x); // 5
}

// let — block scoped, temporal dead zone
function example2() {
  console.log(y); // ReferenceError (temporal dead zone)
  let y = 5;
}

// const — block scoped, no reassignment
const MAX = 100;
MAX = 200; // TypeError

// const with objects — reference is immutable, not the object
const user = { name: 'Alice' };
user.name = 'Bob'; // OK — mutating the object, not the reference
user = {};          // TypeError — reassigning the reference
```

## Scope Types

```javascript
let globalVar = 'global'; // global scope

function outer() {
  let outerVar = 'outer'; // function scope

  function inner() {
    let innerVar = 'inner'; // function scope
    console.log(globalVar); // accessible
    console.log(outerVar);  // accessible (closure)
  }
}

{
  let blockVar = 'block'; // block scope
  console.log(blockVar); // accessible
}
console.log(blockVar); // ReferenceError
```

## Hoisting

```javascript
// Function declarations are fully hoisted
greet(); // works!
function greet() { console.log('Hello'); }

// var declarations are hoisted as undefined
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// let/const — hoisted but not initialized (TDZ)
console.log(y); // ReferenceError
let y = 5;
```

---

## Related Topics

- **Previous:** [Data Types](./data-types)
- **Next:** [Functions](./functions)
