---
id: module-system
title: TypeScript Module System
sidebar_label: Module System
description: TypeScript module resolution, path aliases, declaration files, and Angular's compilation model.
---

# TypeScript Module System

## Module Resolution

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "bundler", // Angular default in v17+
    "baseUrl": ".",
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"]
    }
  }
}
```

## Path Aliases

```typescript
// Instead of:
import { UserService } from '../../../core/services/user.service';

// Use alias:
import { UserService } from '@core/services/user.service';
```

## Declaration Files (.d.ts)

```typescript
// For JavaScript libraries without TypeScript
declare module 'my-js-library' {
  export function process(data: string): string;
}

// Global augmentation
declare global {
  interface Window {
    analytics: AnalyticsService;
  }
}
```

## Angular Module Resolution

Angular uses TypeScript's compiler to resolve imports in templates:

```typescript
// angular.json sets the TypeScript project for templates
// Angular's Language Service uses tsconfig.app.json
// This enables type-checking in HTML templates
```

---

## Related Topics

- **Previous:** [Strict Mode](./strict-mode)
- **Next:** [Compiler Options](./compiler-options)
