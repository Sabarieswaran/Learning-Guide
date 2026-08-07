---
id: error-handling
title: RxJS Error Handling
sidebar_label: Error Handling
description: catchError, retry, retryWhen, throwError, and error recovery patterns in Angular applications.
---

# RxJS Error Handling

## catchError

Recover from an error by returning a new Observable:

```typescript
this.http.get<User[]>('/api/users').pipe(
  catchError(error => {
    console.error('Failed to load users:', error);
    return of([]); // fallback empty array
  })
)

// Re-throw with custom error
catchError(error => throwError(() => new AppError('Users unavailable', error)))
```

## retry

Automatically retry a failed observable:

```typescript
this.http.get('/api/data').pipe(
  retry(3), // retry up to 3 times immediately
)

// With delay
retry({
  count: 3,
  delay: 1000, // wait 1 second between retries
})
```

## Exponential Backoff

```typescript
import { timer } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';

const withExponentialBackoff = (maxRetries = 3) =>
  retryWhen(errors => errors.pipe(
    mergeMap((error, i) => {
      if (i >= maxRetries) throw error;
      const delayMs = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      console.log(`Retry ${i + 1} in ${delayMs}ms`);
      return timer(delayMs);
    })
  ));

this.http.get('/api/data').pipe(withExponentialBackoff(3))
```

## Global Error Handling in Angular

```typescript
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown) {
    if (error instanceof HttpErrorResponse) {
      this.showNotification(`HTTP Error: ${error.status}`);
    } else if (error instanceof Error) {
      this.showNotification(error.message);
    }
    console.error(error);
  }
}

// Register
providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
```

---

## Related Topics

- **Previous:** [Combination Operators](./combination-operators)
- **Next:** [Angular Patterns](./angular-patterns)
