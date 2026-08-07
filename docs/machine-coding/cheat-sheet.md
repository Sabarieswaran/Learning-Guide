---
id: cheat-sheet
title: Machine Coding Cheat Sheet
sidebar_label: Cheat Sheet
description: Machine coding quick reference — Angular patterns, component structure, and accessibility for live coding.
---

# Machine Coding Cheat Sheet

## Component Template

```typescript
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [/* dependencies */],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`,
})
export class FeatureComponent {
  // Inputs
  data = input.required<DataType>();
  config = input<Config>({ defaultValue });

  // Outputs
  selected = output<Item>();
  changed = output<Change>();

  // Services
  private service = inject(FeatureService);
  private destroyRef = inject(DestroyRef);

  // State
  items = signal<Item[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  // Derived
  filteredItems = computed(() => this.items().filter(...));

  // Init
  ngOnInit() {
    this.service.getData().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: items => this.items.set(items),
      error: e => this.error.set(e.message),
    });
  }
}
```

## State Service Template

```typescript
@Injectable({ providedIn: 'root' })
export class FeatureStore {
  private readonly _items = signal<Item[]>([]);

  readonly items = this._items.asReadonly();
  readonly count = computed(() => this._items().length);

  add(item: Item) {
    this._items.update(list => [...list, item]);
  }

  remove(id: string) {
    this._items.update(list => list.filter(i => i.id !== id));
  }

  update(id: string, changes: Partial<Item>) {
    this._items.update(list =>
      list.map(i => i.id === id ? { ...i, ...changes } : i)
    );
  }
}
```

## Common Template Patterns

```html
<!-- List with loading/empty states -->
@if (loading()) {
  <app-skeleton [count]="5" />
} @else if (error()) {
  <app-error [message]="error()!" (retry)="load()" />
} @else if (items().length === 0) {
  <app-empty-state />
} @else {
  @for (item of items(); track item.id) {
    <app-item [item]="item" (deleted)="remove(item.id)" />
  }
}

<!-- Form with submit -->
<form [formGroup]="form" (ngSubmit)="submit()">
  <input formControlName="name" />
  @if (form.get('name')?.errors?.['required'] && form.get('name')?.touched) {
    <p class="error">Name is required</p>
  }
  <button type="submit" [disabled]="form.invalid || loading()">
    {{ loading() ? 'Saving...' : 'Save' }}
  </button>
</form>
```

## Keyboard Navigation (Accessibility)

```typescript
handleKeydown(event: KeyboardEvent): void {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      this.activate();
      break;
    case 'Escape':
      event.preventDefault();
      this.close();
      break;
    case 'ArrowDown':
      event.preventDefault();
      this.focusNext();
      break;
    case 'ArrowUp':
      event.preventDefault();
      this.focusPrev();
      break;
  }
}
```

## Quick Reference

```
Performance:  OnPush + track + signals
Cleanup:      takeUntilDestroyed(inject(DestroyRef))
State:        signal → computed → effect
Types:        interfaces first, no any
Accessibility: ARIA + keyboard + focus
Testing:      stub with signals before integrating service
```
