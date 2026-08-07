---
id: decorators
title: TypeScript Decorators
sidebar_label: Decorators
description: TypeScript decorators — class, method, property, and parameter decorators, and how Angular uses them.
---

# TypeScript Decorators

## Introduction

Decorators are a stage-3 TC39 proposal. TypeScript supports them with `experimentalDecorators: true` (legacy) or natively in TypeScript 5.0+.

Angular makes heavy use of decorators: `@Component`, `@Injectable`, `@Input`, `@Output`.

---

## Class Decorator

```typescript
// Angular's @Injectable is conceptually similar to:
function Injectable(target: Function) {
  // Add metadata for DI
  Reflect.defineMetadata('design:paramtypes', [], target);
}

@Injectable
class UserService {}
```

## Method Decorator

```typescript
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${key} with`, args);
    const result = original.apply(this, args);
    console.log(`${key} returned`, result);
    return result;
  };
}

class UserService {
  @log
  getUser(id: string) { return users.find(u => u.id === id); }
}
```

## Angular Decorators

```typescript
@Component({                          // Class decorator — defines component metadata
  selector: 'app-user',
  template: `{{ name() }}`,
})
export class UserComponent {
  @Input() userId!: string;          // Property decorator — marks as Angular input
  @Output() selected = new EventEmitter<string>(); // Property decorator — output event
  @ViewChild('container') container!: ElementRef;  // Query decorator
}
```

Modern Angular is moving away from decorator-based patterns toward function-based APIs (`input()`, `output()`, `viewChild()`) which don't require decorators.

---

## Related Topics

- **Previous:** [Conditional Types](./conditional-types)
- **Next:** [Strict Mode](./strict-mode)
