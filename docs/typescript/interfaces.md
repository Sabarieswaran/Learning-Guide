---
id: interfaces
title: TypeScript Interfaces
sidebar_label: Interfaces
description: TypeScript interfaces — defining object shapes, optional and readonly properties, extending interfaces, and implementation.
---

# TypeScript Interfaces

## Defining Interfaces

```typescript
interface User {
  readonly id: string;          // immutable
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  avatar?: string;              // optional
  createdAt: Date;
}

interface ApiResponse<T> {
  data: T;
  meta: {
    page: number;
    total: number;
    hasNext: boolean;
  };
  errors?: Array<{ field: string; message: string }>;
}
```

## Extending Interfaces

```typescript
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  rangeKm: number;
  chargingStandard: 'CCS' | 'CHAdeMO' | 'Type2';
}
```

## Function Types in Interfaces

```typescript
interface Transformer<T, R> {
  transform(input: T): R;
  reset(): void;
}

interface EventHandler {
  (event: MouseEvent): void;
}
```

## Interface vs Type Alias

```typescript
// Interface — extendable, supports declaration merging
interface Config { debug: boolean; }
interface Config { verbose: boolean; } // merges — both properties exist

// Type alias — flexible, supports unions and computed types
type Config = { debug: boolean; } & { verbose: boolean };
type ID = string | number;
type ExtractUserName<T> = T extends { name: string } ? T['name'] : never;
```

**Guideline:** Use `interface` for public API shapes. Use `type` for unions, intersections, and utilities.

---

## Related Topics

- **Previous:** [Basic Types](./basic-types)
- **Next:** [Type Aliases](./type-aliases)
