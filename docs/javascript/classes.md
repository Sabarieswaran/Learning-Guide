---
id: classes
title: JavaScript Classes
sidebar_label: Classes
description: JavaScript classes — syntax, inheritance, private fields, static methods, and how Angular uses them.
---

# JavaScript Classes

## Class Basics

```javascript
class User {
  // Private fields (ES2022)
  #id;
  #password;

  // Public field
  role = 'user';

  constructor(id, name, password) {
    this.#id = id;
    this.name = name;
    this.#password = password;
  }

  // Getter
  get id() { return this.#id; }

  // Method
  authenticate(password) {
    return this.#password === password;
  }

  // Static method
  static create(name) {
    return new User(crypto.randomUUID(), name, '');
  }
}
```

## Inheritance

```javascript
class AdminUser extends User {
  #permissions;

  constructor(id, name, password, permissions) {
    super(id, name, password); // must call super first
    this.#permissions = permissions;
  }

  hasPermission(perm) {
    return this.#permissions.includes(perm);
  }
}
```

## Angular Context

Angular components are TypeScript classes decorated with `@Component`. The class syntax maps directly:

```typescript
@Component({ selector: 'app-root', ... })
export class AppComponent {
  private readonly service = inject(AppService); // dependency injection
  count = signal(0);                             // reactive state

  // Methods are event handlers
  increment() { this.count.update(v => v + 1); }
}
```

---

## Related Topics

- **Previous:** [Arrays](./arrays)
- **Next:** [Closures](./closures)
