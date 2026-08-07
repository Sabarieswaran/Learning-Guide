---
id: kanban-board
title: Build a Kanban Board
sidebar_label: Kanban Board
description: Complete Angular Kanban board implementation — drag and drop, column management, card CRUD, and state management.
---

# Build a Kanban Board

## Problem Statement

Build a Kanban board with:
- Multiple columns (Todo, In Progress, Done)
- Cards that can be moved between columns
- Add/edit/delete cards
- Add/rename/delete columns
- Drag and drop (bonus)

---

## Types

```typescript
// board.model.ts
export interface Card {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  createdAt: Date;
}

export interface Column {
  id: string;
  title: string;
  cardIds: string[];
  limit?: number; // WIP limit
}

export interface BoardState {
  id: string;
  title: string;
  columns: Record<string, Column>;
  cards: Record<string, Card>;
  columnOrder: string[];
}
```

---

## Service with Signal State

```typescript
@Injectable({ providedIn: 'root' })
export class BoardService {
  private readonly _state = signal<BoardState>(this.loadOrDefault());

  readonly state = this._state.asReadonly();
  readonly columns = computed(() =>
    this._state().columnOrder.map(id => this._state().columns[id])
  );
  readonly cardsByColumn = (columnId: string) =>
    computed(() =>
      this._state().columns[columnId]?.cardIds
        .map(id => this._state().cards[id])
        .filter(Boolean) ?? []
    );

  addCard(columnId: string, title: string): void {
    const id = crypto.randomUUID();
    this._state.update(s => ({
      ...s,
      cards: {
        ...s.cards,
        [id]: { id, title, priority: 'medium', createdAt: new Date() },
      },
      columns: {
        ...s.columns,
        [columnId]: {
          ...s.columns[columnId],
          cardIds: [...s.columns[columnId].cardIds, id],
        },
      },
    }));
    this.persist();
  }

  moveCard(cardId: string, fromColumnId: string, toColumnId: string): void {
    this._state.update(s => ({
      ...s,
      columns: {
        ...s.columns,
        [fromColumnId]: {
          ...s.columns[fromColumnId],
          cardIds: s.columns[fromColumnId].cardIds.filter(id => id !== cardId),
        },
        [toColumnId]: {
          ...s.columns[toColumnId],
          cardIds: [...s.columns[toColumnId].cardIds, cardId],
        },
      },
    }));
    this.persist();
  }

  private persist(): void {
    localStorage.setItem('board', JSON.stringify(this._state()));
  }

  private loadOrDefault(): BoardState {
    try {
      const saved = localStorage.getItem('board');
      if (saved) return JSON.parse(saved);
    } catch {}
    return getDefaultBoard();
  }
}
```

---

## Board Component

```typescript
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardColumnComponent, AddColumnFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="board">
      @for (column of boardService.columns(); track column.id) {
        <app-board-column
          [column]="column"
          [cards]="boardService.cardsByColumn(column.id)()"
          (cardMoved)="onCardMoved($event)"
          (cardAdded)="onCardAdded($event)"
          (cardDeleted)="onCardDeleted($event)"
        />
      }
      <app-add-column-form (columnAdded)="onColumnAdded($event)" />
    </div>
  `,
  styles: [`
    .board {
      display: flex;
      gap: 1rem;
      padding: 1.5rem;
      overflow-x: auto;
      min-height: 100vh;
      align-items: flex-start;
    }
  `],
})
export class BoardComponent {
  readonly boardService = inject(BoardService);

  onCardAdded(e: { columnId: string; title: string }) {
    this.boardService.addCard(e.columnId, e.title);
  }

  onCardMoved(e: { cardId: string; from: string; to: string }) {
    this.boardService.moveCard(e.cardId, e.from, e.to);
  }

  onCardDeleted(e: { cardId: string; columnId: string }) {
    this.boardService.deleteCard(e.cardId, e.columnId);
  }

  onColumnAdded(title: string) {
    this.boardService.addColumn(title);
  }
}
```

---

## Interview Points to Mention

- **Normalized state** — `Record<id, entity>` prevents O(n) lookups
- **OnPush everywhere** — each column only re-renders when its cards change
- **Immutable updates** — spread operator prevents mutation
- **LocalStorage persistence** — survives page refresh
- **Accessibility** — keyboard-navigable cards, ARIA labels on column regions

---

## Related Topics

- **Previous:** [Approach Framework](./approach-framework)
- **Next:** [Tree View](./tree-view)
