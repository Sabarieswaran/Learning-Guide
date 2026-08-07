---
id: prototypes
title: JavaScript Prototypes
sidebar_label: Prototypes
description: The prototype chain, prototype-based inheritance, Object.create, and how ES6 classes map to prototypes.
---

# JavaScript Prototypes

## The Prototype Chain

Every object has an internal `[[Prototype]]` link. Property lookup walks up this chain:

```javascript
const animal = {
  speak() { return 'Some sound'; }
};

const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // found on animal — 'Some sound'
dog.toString(); // found on Object.prototype — '[object Object]'
```

## Class Syntax and Prototypes

`class` is syntactic sugar — it creates the same prototype chain:

```javascript
class Animal {
  speak() { return 'Sound'; }
}

class Dog extends Animal {
  bark() { return 'Woof'; }
}

const d = new Dog();
// d.__proto__ === Dog.prototype
// d.__proto__.__proto__ === Animal.prototype
// d.__proto__.__proto__.__proto__ === Object.prototype
// d.__proto__.__proto__.__proto__.__proto__ === null

d.bark(); // Dog.prototype.bark
d.speak(); // Animal.prototype.speak
d.toString(); // Object.prototype.toString
```

## Checking Prototype Chain

```javascript
d instanceof Dog    // true
d instanceof Animal // true
Object.getPrototypeOf(d) === Dog.prototype // true
```

## Interview Q: How do classes differ from prototypes?

They don't — ES6 classes compile down to prototype-based code. `class` provides cleaner syntax, private fields, and static methods, but the runtime behavior is identical. Understanding prototypes lets you explain why `instanceof` works across the chain and how `super` calls parent methods.

---

## Related Topics

- **Previous:** [Classes](./classes)
- **Next:** [Event Loop](./event-loop)
