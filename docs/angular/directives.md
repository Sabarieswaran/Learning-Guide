---
id: directives
title: Angular Directives
sidebar_label: Directives
description: Angular attribute and structural directives — built-in directives and creating custom ones.
---

# Angular Directives

## Introduction

Directives add behavior to elements without creating a new DOM structure. Angular has two types: **attribute directives** (modify appearance or behavior) and **structural directives** (add/remove DOM elements).

---

## Built-in Attribute Directives

```html
<!-- NgClass — conditionally apply CSS classes -->
<div [ngClass]="{ 'active': isActive(), 'disabled': isDisabled() }">
<div [class.active]="isActive()">

<!-- NgStyle — conditionally apply inline styles -->
<div [ngStyle]="{ color: textColor(), fontSize: fontSize() + 'px' }">
<div [style.color]="textColor()">

<!-- NgModel — two-way binding in template forms -->
<input [(ngModel)]="username" />
```

---

## Creating a Custom Attribute Directive

```typescript
@Directive({
  selector: '[appTooltip]',
  standalone: true,
  host: {
    '(mouseenter)': 'showTooltip()',
    '(mouseleave)': 'hideTooltip()',
    '(focus)': 'showTooltip()',
    '(blur)': 'hideTooltip()',
    '[attr.aria-describedby]': 'tooltipId',
  },
})
export class TooltipDirective implements OnDestroy {
  text = input.required<string>({ alias: 'appTooltip' });
  tooltipId = `tooltip-${Math.random().toString(36).slice(2)}`;

  private tooltipEl: HTMLElement | null = null;
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  protected showTooltip() {
    this.tooltipEl = this.renderer.createElement('div');
    this.renderer.setAttribute(this.tooltipEl, 'id', this.tooltipId);
    this.renderer.setAttribute(this.tooltipEl, 'role', 'tooltip');
    this.renderer.appendChild(this.tooltipEl, this.renderer.createText(this.text()));
    this.renderer.appendChild(document.body, this.tooltipEl);
  }

  protected hideTooltip() {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
      this.tooltipEl = null;
    }
  }

  ngOnDestroy() { this.hideTooltip(); }
}
```

---

## Custom Structural Directive

```typescript
@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRoleDirective {
  private readonly authService = inject(AuthService);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef);

  hasRole = input.required<string | string[]>({ alias: 'appHasRole' });

  constructor() {
    effect(() => {
      const roles = Array.isArray(this.hasRole()) ? this.hasRole() : [this.hasRole()];
      const canShow = roles.some(r => this.authService.hasRole(r));
      this.viewContainer.clear();
      if (canShow) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}

// Usage
<button *appHasRole="'admin'">Delete User</button>
<button [appHasRole]="['admin', 'editor']">Edit</button>
```

---

## Related Topics

- **Previous:** [Templates](./templates)
- **Next:** [Pipes](./pipes)
