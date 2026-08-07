---
id: security
title: Browser Security
sidebar_label: Security
description: XSS, CSRF, Content Security Policy, CORS, clickjacking, and Angular's built-in security features.
---

# Browser Security

## XSS (Cross-Site Scripting)

Injecting malicious scripts into web pages viewed by other users.

### Angular's Built-in Protection

Angular automatically HTML-escapes interpolated values:

```html
<!-- Safe — Angular escapes this -->
{{ userInput }}  <!-- <script>alert(1)</script> → rendered as text -->

<!-- Dangerous — bypasses protection -->
<div [innerHTML]="userContent"></div>

<!-- Sanitized — Angular strips dangerous HTML -->
<div [innerHTML]="userContent | sanitize:'html'"></div>
```

**Rule:** Never use `DomSanitizer.bypassSecurityTrustHtml()` unless the source is completely trusted server-generated content.

## Content Security Policy (CSP)

HTTP header that tells browsers which sources are trusted:

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.trusted.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
```

Angular's AOT compiler eliminates `eval()` and dynamic code generation, making strict CSP compatible.

## CSRF (Cross-Site Request Forgery)

Angular's `HttpClient` automatically reads the `XSRF-TOKEN` cookie and sends it as `X-XSRF-TOKEN` header for non-GET requests.

```typescript
// Enable CSRF protection
provideHttpClient(withXsrfConfiguration({
  cookieName: 'XSRF-TOKEN',
  headerName: 'X-XSRF-TOKEN',
}))
```

## CORS

Browser enforces same-origin policy. CORS headers from the server allow cross-origin requests:

```
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## Related Topics

- **Previous:** [Storage](./storage)
- **Related:** [Angular Best Practices](/docs/angular/best-practices)
