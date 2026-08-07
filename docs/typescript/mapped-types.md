---
id: mapped-types
title: TypeScript Mapped Types
sidebar_label: Mapped Types
description: Mapped types, modifiers, key remapping, template literal types, and creating custom utility types.
---

# TypeScript Mapped Types

## Introduction

Mapped types iterate over the keys of an existing type to create a new type. All of TypeScript's built-in utility types (`Partial`, `Readonly`, `Required`) are implemented as mapped types.

---

## Basic Mapped Type

```typescript
// Make all properties optional (Partial<T>)
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties readonly
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Make all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

## Adding/Removing Modifiers

```typescript
// Remove readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Remove optional
type Required<T> = {
  [K in keyof T]-?: T[K];
};
```

## Key Remapping

```typescript
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<{ name: string; age: number }>;
// { getName: () => string; getAge: () => number }
```

## Angular Signal Form

```typescript
type SignalForm<T> = {
  [K in keyof T]: WritableSignal<T[K]>;
};

type UserForm = SignalForm<User>;
// { name: WritableSignal<string>; email: WritableSignal<string>; ... }
```

---

## Related Topics

- **Previous:** [Utility Types](./utility-types)
- **Next:** [Conditional Types](./conditional-types)
