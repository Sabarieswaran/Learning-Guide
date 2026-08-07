---
id: pipes
title: Angular Pipes
sidebar_label: Pipes
description: Angular built-in pipes, creating custom pure and impure pipes, and performance considerations.
---

# Angular Pipes

## Introduction

Pipes transform data in templates. They are functions that accept an input value and return a transformed output. Angular provides built-in pipes and allows creating custom ones.

---

## Built-in Pipes

```html
{{ 42.567 | number:'1.0-2' }}          <!-- 42.57 -->
{{ 1234.5 | currency:'USD':'symbol' }} <!-- $1,234.50 -->
{{ today | date:'dd/MM/yyyy' }}        <!-- 07/08/2026 -->
{{ 'hello world' | uppercase }}        <!-- HELLO WORLD -->
{{ 'hello world' | titlecase }}        <!-- Hello World -->
{{ longText | slice:0:100 }}           <!-- first 100 chars -->
{{ obj | json }}                       <!-- JSON stringified -->
{{ obs$ | async }}                     <!-- subscribe to observable -->
{{ value | keyvalue }}                 <!-- iterate object entries -->
```

---

## Creating a Custom Pipe

```typescript
@Pipe({
  name: 'truncate',
  standalone: true,
  pure: true, // default — only recalculates when input reference changes
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, trail = '...'): string {
    if (!value) return '';
    return value.length > limit
      ? `${value.substring(0, limit)}${trail}`
      : value;
  }
}

// Usage
{{ description | truncate:150:'…' }}
```

---

## Pure vs Impure Pipes

**Pure** (default): Only recalculates when the input reference changes. Efficient.

**Impure**: Recalculates on every change detection cycle. Use sparingly.

```typescript
@Pipe({
  name: 'filter',
  standalone: true,
  pure: false, // recalculate on every CD cycle
})
export class FilterPipe implements PipeTransform {
  transform(items: Item[], query: string): Item[] {
    return items.filter(i => i.name.includes(query));
  }
}
```

For filtering and sorting, prefer computed signals over impure pipes — signals recalculate only when dependencies change.

---

## Related Topics

- **Previous:** [Directives](./directives)
- **Next:** [Services](./services)
