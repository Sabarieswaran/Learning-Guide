---
id: interview-questions
title: JavaScript Interview Questions
sidebar_label: Interview Questions
description: 25+ JavaScript interview questions at Easy, Medium, Hard, and Senior levels with complete answers.
---

# JavaScript Interview Questions

## Easy

**Q: What is the difference between `==` and `===`?**

`===` (strict equality) checks value and type without coercion. `==` (loose equality) coerces types before comparing: `'1' == 1` is `true`, `'1' === 1` is `false`. Always use `===` to avoid unexpected coercion bugs.

**Q: What is `typeof null` and why?**

`typeof null` returns `'object'`. This is a historical bug in JavaScript's original implementation — null was encoded as a zero bit pointer, which the type system incorrectly read as an object. The spec cannot be fixed without breaking existing code. Use `value === null` to check for null.

**Q: What is the difference between `let`, `const`, and `var`?**

`var` is function-scoped and hoisted with `undefined`. `let` and `const` are block-scoped and not hoisted. `const` prevents reassignment but doesn't make objects immutable. Prefer `const` by default, `let` when the variable needs reassignment, never `var`.

**Q: What is hoisting?**

Variable declarations with `var` and function declarations are moved to the top of their scope before execution. `var` variables are initialized with `undefined`. Function declarations are fully hoisted. `let` and `const` are hoisted but not initialized — accessing them before declaration causes a ReferenceError (temporal dead zone).

---

## Medium

**Q: Explain the prototype chain.**

Every JavaScript object has a `[[Prototype]]` property pointing to another object. When you access a property, JavaScript checks the object first, then walks up the prototype chain until it finds the property or reaches `null` at the chain's end. `Object.prototype` is at the top of most chains. `class` syntax uses prototype chains under the hood.

**Q: What are the `this` binding rules?**

`this` is determined at call time, not definition time:
1. `new` binding: `new Foo()` → `this` is the new object
2. Explicit binding: `.call(obj)`, `.apply(obj)`, `.bind(obj)` → `this` is `obj`
3. Implicit binding: `obj.method()` → `this` is `obj`
4. Default binding: standalone call → `this` is global (`undefined` in strict mode)
5. Arrow functions: no own `this` — they use the enclosing context's `this`

**Q: What is the difference between `null` and `undefined`?**

`undefined` means a variable was declared but not assigned, or a function parameter was not provided, or an object property doesn't exist. `null` is an explicitly assigned "no value" — a deliberate absence. `typeof undefined` is `'undefined'`; `typeof null` is `'object'`.

**Q: Explain event bubbling and capturing.**

DOM events propagate in two phases. Capturing (top-down): event travels from document root to the target. Bubbling (bottom-up): event travels from target back up to root. Most event handlers use bubbling (default). `addEventListener(type, handler, true)` uses capturing. `event.stopPropagation()` stops the event from continuing up/down.

---

## Hard

**Q: What is a generator function and when would you use it?**

A generator function uses `function*` and `yield`. Calling it returns an iterator object. `yield` suspends execution and returns a value. Calling `.next()` resumes. Use cases: infinite sequences, lazy iterators, custom iterables, cooperative multitasking. In older Angular codebases, generators were used to implement custom async flows before async/await.

**Q: Explain WeakMap and WeakRef and when to use them.**

`WeakMap` holds key-value pairs where keys are objects and references are weak — the GC can collect the key object even if it's in the WeakMap. Use it for private data associated with objects (like the DOM node → component mapping). `WeakRef` holds a weak reference to an object, allowing the GC to collect it. Check with `.deref()` before use. Both are tools for memory-sensitive code but rarely needed in typical application development.

---

## Senior

**Q: How would you implement a debounce function from scratch?**

```javascript
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

The closure captures `timerId`. Each call clears the previous timer and sets a new one. Only the call after `delay` ms of silence actually executes `fn`.

**Q: Explain how JavaScript handles memory management and what causes leaks.**

JavaScript uses mark-and-sweep garbage collection. The GC marks all objects reachable from root references (global, stack), then sweeps unreachable objects. Memory leaks occur when objects that should be garbage collected remain reachable: event listeners not removed on component destroy, closures holding references to large objects, global variable accumulation, DOM nodes stored in closures after removal from the DOM, setInterval without clearInterval.

---

## Cheat Sheet

```
Event order:        Capturing → Target → Bubbling
this binding:       new > explicit (.call/.apply/.bind) > implicit (obj.method()) > default
Falsy values:       false, 0, '', null, undefined, NaN
Type coercion:      '' == false → true (use ===)
Scope:              var = function scope; let/const = block scope
Hoisting:           var → undefined; function → fully; let/const → TDZ
Generator:          function*() { yield value; }
Async iteration:    for await (const item of asyncIterable) {}
```
---

## Related Topics

- **Previous:** [Best Practices](./best-practices)
- **Next:** [Cheat Sheet](./cheat-sheet)
- **Related:** [TypeScript Interview Questions](/docs/typescript/interview-questions)