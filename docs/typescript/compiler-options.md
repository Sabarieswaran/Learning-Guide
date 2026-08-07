---
id: compiler-options
title: TypeScript Compiler Options
sidebar_label: Compiler Options
description: Key TypeScript compiler options for Angular projects — target, module, lib, paths, and build optimization.
---

# TypeScript Compiler Options

## Key Options for Angular

```json
{
  "compilerOptions": {
    "target": "ES2022",              // JS output target
    "module": "ES2022",              // module format
    "moduleResolution": "bundler",   // how imports are resolved
    "lib": ["ES2022", "dom", "dom.iterable"],
    "strict": true,
    "experimentalDecorators": true,  // Angular decorators
    "useDefineForClassFields": false, // Angular requirement
    "sourceMap": true,
    "declaration": true,             // generate .d.ts files
    "declarationMap": true,
    "baseUrl": ".",
    "paths": {
      "@app/*": ["src/app/*"],
      "@env/*": ["src/environments/*"]
    },
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

## `target` and `lib`

`target` sets the JavaScript syntax output level. `lib` determines which built-in APIs TypeScript knows about:

- `ES2022` — includes `Array.at()`, `Object.hasOwn()`, top-level await
- `dom` — browser APIs (document, window, fetch)
- `dom.iterable` — makes DOM collections iterable

## `paths` (Import Aliases)

Maps import aliases to directories, enabling clean imports:

```typescript
import { AuthService } from '@app/core/auth';
// resolves to: src/app/core/auth
```

Works with Angular's build system when `baseUrl` is set.

---

## Related Topics

- **Previous:** [Module System](./module-system)
- **Next:** [Angular Integration](./angular-integration)
