import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TodoComponent, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('adds a todo item', () => {
    component.newTodoControl.setValue('Buy groceries');

    component.addTodo();

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('Buy groceries');
    expect(component.todos[0].completed).toBeFalse();
  });

  it('toggles a todo item completion state', () => {
    component.newTodoControl.setValue('Finish UI');
    component.addTodo();

    const todoId = component.todos[0].id;
    component.toggleTodo(todoId);

    expect(component.todos[0].completed).toBeTrue();
  });

  it('clears completed items only', () => {
    component.newTodoControl.setValue('One');
    component.addTodo();
    component.newTodoControl.setValue('Two');
    component.addTodo();

    component.toggleTodo(component.todos[0].id);
    component.clearCompleted();

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].title).toBe('One');
  });
});

