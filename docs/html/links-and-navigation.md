---
id: links-and-navigation
title: HTML Links and Navigation
sidebar_label: Links and Navigation
description: The anchor element, link types, navigation patterns, skip links, and Angular Router integration.
---

# HTML Links and Navigation

## The Anchor Element

```html
<!-- Basic link -->
<a href="/about">About us</a>

<!-- External link — best practices -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Site
</a>

<!-- Email -->
<a href="mailto:hello@example.com">Email us</a>

<!-- Phone -->
<a href="tel:+1234567890">Call us</a>

<!-- Download -->
<a href="/report.pdf" download="annual-report-2026.pdf">Download Report</a>

<!-- Jump to section -->
<a href="#section-2">Go to Section 2</a>
<section id="section-2">...</section>
```

## `rel` Attribute Values

| Value | Meaning |
|---|---|
| `noopener` | Prevents opener tab access (security) |
| `noreferrer` | Hides referrer + noopener |
| `nofollow` | Tell search engines not to follow |
| `canonical` | Canonical URL hint |

## Skip Links (Accessibility)

```html
<a class="skip-link" href="#main-content">Skip to main content</a>

<main id="main-content">...</main>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
}
.skip-link:focus {
  top: 0; /* visible when focused */
}
```

## Angular RouterLink

```html
<!-- Navigate to route -->
<a routerLink="/users">Users</a>

<!-- With params -->
<a [routerLink]="['/users', userId]">User Profile</a>

<!-- Active class -->
<a routerLink="/dashboard" routerLinkActive="nav--active"
   [routerLinkActiveOptions]="{ exact: true }">
  Dashboard
</a>
```

---

## Related Topics

- **Previous:** [Text Content](./text-content)
- **Next:** [Images and Media](./images-and-media)
