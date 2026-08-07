---
id: conditional-types
title: TypeScript Conditional Types
sidebar_label: Conditional Types
description: Conditional types, the infer keyword, distributive conditional types, and building utility types.
---

# TypeScript Conditional Types

## Basic Conditional Types

```typescript
// T extends U ? TrueType : FalseType
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

## The `infer` Keyword

`infer` captures a type within a conditional type:

```typescript
// Extract return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type GetUserReturn = ReturnType<typeof userService.getUser>;
// Observable<User>

// Unwrap Promise
type Awaited<T> = T extends Promise<infer U> ? U : T;

// Unwrap Observable (useful in Angular)
type ObservedValueOf<T> = T extends Observable<infer U> ? U : never;
```

## Distributive Conditional Types

When applied to a union, conditional types distribute over each member:

```typescript
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>;
// string[] | number[] (distributes)

// Prevent distribution with brackets
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type StrOrNumArray2 = ToArrayNonDist<string | number>;
// (string | number)[]
```

## Angular Signal Type Extraction

```typescript
// Extract signal value type
type SignalValue<T> = T extends Signal<infer U> ? U : never;

type CountValue = SignalValue<Signal<number>>;
// number

type UserValue = SignalValue<Signal<User | null>>;
// User | null
```

---

## Related Topics

- **Previous:** [Mapped Types](./mapped-types)
- **Next:** [Decorators](./decorators)
