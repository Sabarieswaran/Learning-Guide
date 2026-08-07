---
id: data-types
title: JavaScript Data Types
sidebar_label: Data Types
description: JavaScript primitive and reference types, type coercion, and the type system explained.
---

# JavaScript Data Types

## Primitives

JavaScript has 7 primitive types:

```javascript
let str: string = 'hello';
let num: number = 42;              // includes Infinity, -Infinity, NaN
let bigint: bigint = 9007199254740991n;
let bool: boolean = true;
let undef: undefined = undefined;  // unintentional absence of value
let nul: null = null;              // intentional absence of value
let sym: symbol = Symbol('id');    // unique, non-enumerable identifier
```

Primitives are **immutable** and passed **by value**.

---

## Reference Types

```javascript
const obj = { name: 'Alice' };   // Object
const arr = [1, 2, 3];           // Array (subtype of Object)
const fn = () => {};              // Function (callable Object)
const date = new Date();         // Date (Object)
const re = /pattern/g;           // RegExp (Object)
```

Reference types are **mutable** and passed **by reference**.

---

## Type Checking

```javascript
typeof 'hello'     // 'string'
typeof 42          // 'number'
typeof true        // 'boolean'
typeof undefined   // 'undefined'
typeof null        // 'object' (bug!)
typeof {}          // 'object'
typeof []          // 'object'
typeof function(){}// 'function'
typeof Symbol()    // 'symbol'

// Better checks
Array.isArray([])                    // true
value === null                       // null check
value instanceof Date                // instance check
Object.prototype.toString.call(val)  // '[object Type]'
```

---

## Type Coercion

```javascript
// Implicit coercion
'5' + 3    // '53' (string concatenation)
'5' - 3    // 2 (numeric subtraction)
true + 1   // 2
null + 1   // 1
undefined + 1 // NaN

// Explicit conversion
Number('42')     // 42
String(42)       // '42'
Boolean(0)       // false
parseInt('42px') // 42
```

**Rule:** Always use `===` to avoid coercion surprises.

---

## Related Topics

- **Next:** [Variables](./variables)
- **Related:** [TypeScript Basic Types](/docs/typescript/basic-types)
