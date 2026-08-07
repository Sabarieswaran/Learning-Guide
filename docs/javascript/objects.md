---
id: objects
title: JavaScript Objects
sidebar_label: Objects
description: Objects, property access, prototypes, computed properties, Object methods, and immutability patterns.
---

# JavaScript Objects

## Object Basics

```javascript
const user = {
  name: 'Alice',
  age: 30,
  'job title': 'Engineer',      // quoted key for spaces
  greet() { return `Hi, ${this.name}`; },
  get fullInfo() { return `${this.name}, ${this.age}`; },
};

// Access
user.name           // dot notation
user['job title']   // bracket notation — required for spaces/expressions
user.greet()

// Computed properties
const prop = 'name';
const obj = { [prop]: 'Alice' }; // { name: 'Alice' }
```

## Spreading and Merging

```javascript
// Shallow copy
const copy = { ...user };

// Merge objects
const updated = { ...user, age: 31 };

// Pick specific properties
const { name, age } = user;
const { name: userName, ...rest } = user; // destructure + rest
```

## Object.entries / Object.fromEntries

```javascript
// Transform object values
const doubled = Object.fromEntries(
  Object.entries(scores).map(([k, v]) => [k, v * 2])
);
```

## Prototypes

```javascript
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks`; }
}

const d = new Dog('Rex');
d instanceof Dog    // true
d instanceof Animal // true (prototype chain)
```

---

## Related Topics

- **Previous:** [Functions](./functions)
- **Next:** [Arrays](./arrays)
