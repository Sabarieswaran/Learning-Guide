---
id: type-aliases
title: TypeScript Type Aliases
sidebar_label: Type Aliases
description: Type aliases for unions, intersections, template literal types, and mapped types in TypeScript.
---

# TypeScript Type Aliases

## Basics

```typescript
type ID = string | number;
type Nullable<T> = T | null;
type Maybe<T> = T | null | undefined;

// Object shape (alternative to interface)
type User = {
  id: string;
  name: string;
};
```

## Template Literal Types

```typescript
type EventName = `on${Capitalize<string>}`;
// 'onClick', 'onChange', 'onKeyDown', etc.

type CSSUnit = 'px' | 'rem' | 'em' | '%';
type CSSLength = `${number}${CSSUnit}`;
// '16px', '1.5rem', '100%', etc.

// Signal event names
type SignalEvent<T extends string> = `${T}Changed`;
type UserEvents = SignalEvent<'name' | 'email'>;
// 'nameChanged' | 'emailChanged'
```

## Discriminated Unions

```typescript
// Common pattern for async state in Angular
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T };

// Usage with signals
const state = signal<AsyncState<User[]>>({ status: 'idle' });

// Type-safe exhaustive switch
function render(s: AsyncState<User[]>) {
  switch (s.status) {
    case 'idle': return null;
    case 'loading': return loadingComponent;
    case 'error': return errorComponent(s.error.message);
    case 'success': return userList(s.data);
  }
}
```

---

## Related Topics

- **Previous:** [Interfaces](./interfaces)
- **Next:** [Generics](./generics)
