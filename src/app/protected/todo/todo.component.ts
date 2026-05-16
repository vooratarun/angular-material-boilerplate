import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ]
})
export class TodoComponent {
  private readonly storageKey = 'material-todo-items';

  newTodoControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.maxLength(100)]
  });

  todos: TodoItem[] = this.loadTodos();

  get completedCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  addTodo(): void {
    const title = this.newTodoControl.value.trim();

    if (!title) {
      return;
    }

    this.todos = [
      {
        id: Date.now(),
        title,
        completed: false
      },
      ...this.todos
    ];

    this.newTodoControl.reset('');
    this.persistTodos();
  }

  toggleTodo(todoId: number): void {
    this.todos = this.todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    this.persistTodos();
  }

  removeTodo(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    this.persistTodos();
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.persistTodos();
  }

  private loadTodos(): TodoItem[] {
    const storedTodos = localStorage.getItem(this.storageKey);

    if (!storedTodos) {
      return [];
    }

    try {
      const parsed = JSON.parse(storedTodos) as TodoItem[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private persistTodos(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }
}

