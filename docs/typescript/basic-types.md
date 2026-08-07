---
id: basic-types
title: TypeScript Basic Types
sidebar_label: Basic Types
description: TypeScript primitive types, type inference, literal types, and union types.
---

# TypeScript Basic Types

## Primitives

```typescript
let name: string = 'Alice';
let age: number = 30;
let active: boolean = true;
let id: symbol = Symbol('user-id');
let big: bigint = 9007199254740991n;

// TypeScript infers types — annotations often unnecessary
let inferred = 'hello'; // type: string
```

## Structural Types

```typescript
let anything: unknown = getValue(); // type-safe any — must narrow before use
let unsafe: any = getValue();       // avoid — opts out of type checking
let empty: void = undefined;        // for function return types
let impossible: never = error();    // unreachable code, exhaustive checks
```

## Arrays and Tuples

```typescript
let scores: number[] = [1, 2, 3];
let names: Array<string> = ['Alice', 'Bob'];
let pair: [string, number] = ['Alice', 30];  // tuple — fixed length + types
let rest: [string, ...number[]] = ['scores', 1, 2, 3]; // rest tuple
```

## Union and Intersection Types

```typescript
// Union — one of these types
type ID = string | number;
type Status = 'loading' | 'success' | 'error' | null;

// Intersection — all of these types combined
type AdminUser = User & { permissions: string[] };
```

## Literal Types

```typescript
type Direction = 'north' | 'south' | 'east' | 'west';
type Bit = 0 | 1;
type Status = 200 | 201 | 400 | 404 | 500;

const direction: Direction = 'north'; // OK
const dir: Direction = 'up'; // Error — not in union
```

## Type Narrowing

```typescript
function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase(); // narrowed to string
  }
  return value.toFixed(2); // narrowed to number
}

// Discriminated unions (common in Angular state)
type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: User[] };

function render(state: State) {
  switch (state.status) {
    case 'loading': return '<spinner>';
    case 'error': return state.message; // TypeScript knows message exists
    case 'success': return state.data;  // TypeScript knows data exists
  }
}
```

---

## Related Topics

- **Previous:** [TypeScript Introduction](./introduction)
- **Next:** [Interfaces](./interfaces)
