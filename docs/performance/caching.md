---
id: caching
title: Caching Strategies
sidebar_label: Caching
description: HTTP caching, service workers, Angular PWA, memory caching with shareReplay, and cache invalidation.
---

# Caching Strategies

## HTTP Caching

```
Cache-Control: max-age=31536000, immutable  → assets with content hash
Cache-Control: no-cache                      → re-validate each time
Cache-Control: no-store                      → never cache
Cache-Control: private, max-age=3600         → user-specific, 1 hour
ETag: "abc123"                               → conditional requests
```

Angular's production build uses content hashing: `main.abc123.js`. Static assets get `immutable` cache headers — they never change because the hash changes when content changes.

## shareReplay for HTTP Caches

```typescript
@Injectable({ providedIn: 'root' })
export class ConfigService {
  private readonly http = inject(HttpClient);

  // Cache the response — same Observable for all subscribers
  readonly config$ = this.http.get<Config>('/api/config').pipe(
    shareReplay(1)
  );
}
```

`shareReplay(1)` caches the last HTTP response. All components get the same response without additional requests.

## Angular Service Worker (PWA)

```bash
ng add @angular/pwa
```

```json
// ngsw-config.json
{
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": { "files": ["/favicon.ico", "/index.html", "/*.css", "/*.js"] }
    }
  ],
  "dataGroups": [
    {
      "name": "api",
      "urls": ["/api/**"],
      "cacheConfig": { "strategy": "freshness", "maxAge": "1d" }
    }
  ]
}
```

---

## Related Topics

- **Previous:** [Image Optimization](./image-optimization)
- **Next:** [Interview Questions](./interview-questions)
