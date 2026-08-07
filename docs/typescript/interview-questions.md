---
id: interview-questions
title: TypeScript Interview Questions
sidebar_label: Interview Questions
description: 20+ TypeScript interview questions covering type narrowing, generics, strict mode, utility types, and the infer keyword.
---

# TypeScript Interview Questions

## Easy

**Q: What is the difference between `interface` and `type`?**

Interfaces are extendable via `extends` and support declaration merging. Type aliases support unions, intersections, and computed types. Use `interface` for public API shapes that may be extended. Use `type` for unions and utility types.

**Q: What does `readonly` do?**

`readonly` prevents property reassignment after initialization. It's a compile-time check — the JavaScript output doesn't enforce it. Use it for immutable value objects and to signal that a property should not change.

**Q: What is `unknown` and how does it differ from `any`?**

Both represent "any type", but `unknown` requires type narrowing before use — you can't access properties on `unknown` without first checking the type. `any` skips all checks. Use `unknown` when you don't know the type but want type safety; it forces you to validate before use.

---

## Medium

**Q: Explain type narrowing with examples.**

TypeScript narrows union types based on runtime checks: `typeof` for primitives, `instanceof` for class instances, `in` for property existence, discriminant properties in discriminated unions, and truthiness checks. After narrowing, TypeScript knows the exact type within that branch.

**Q: What are utility types? Name 5 important ones.**

Built-in generic types: `Partial<T>` (all optional), `Required<T>` (all required), `Pick<T, K>` (subset), `Omit<T, K>` (exclude keys), `Record<K, V>` (object map), `ReturnType<T>` (function return type), `NonNullable<T>` (remove null/undefined).

**Q: What is a discriminated union and why is it better than boolean flags?**

A discriminated union uses a common property (discriminant) to distinguish between variants. TypeScript narrows to the correct type in each branch. Better than boolean flags because adding a new state is explicit (add a new variant, compiler forces you to handle it everywhere), impossible states are unrepresentable, and exhaustiveness checking works.

---

## Hard

**Q: Explain `infer` in conditional types.**

`infer` captures a type within an `extends` clause of a conditional type. Example: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never`. Here `R` is inferred from the return position of the function type. This powers all of TypeScript's utility types that extract parts of function signatures.

**Q: How does `strictPropertyInitialization` affect Angular components?**

It ensures all class properties are assigned in the constructor. For Angular, properties using `@Input()` often can't be initialized in the constructor. Solutions: use `input()` signal functions (always initialized), use the definite assignment assertion `!`, mark as optional with `?`, or provide a default value. With signal inputs, strict property initialization is naturally satisfied.

---

## Cheat Sheet

```
Common patterns:
  T | null | undefined    → use NonNullable<T> or optional chaining
  Function parameters     → Parameters<typeof fn>
  Function return type    → ReturnType<typeof fn>
  Class instance          → InstanceType<typeof MyClass>
  Deep readonly           → use 'as const' or DeepReadonly<T>
  Discriminated union     → { type: 'a'; payload: A } | { type: 'b'; payload: B }
  Exhaustive switch       → add 'default: never' branch

Angular-specific:
  Typed form              → FormControl<string>
  Typed HTTP              → this.http.get<User[]>(url)
  Signal value            → typeof signal extends Signal<infer T> ? T : never
```
