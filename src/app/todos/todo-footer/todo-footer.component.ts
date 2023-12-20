import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  actualFilter: validFilters = 'todos';
  filters: validFilters[] = ['todos', 'completados', 'pendientes'];
  pendingTasks: number = 0;
  completedTasks: number = 0;
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      this.actualFilter = filter;
      this.todos = todos;
      this.pendingTasks = todos.filter((todo: Todo) => !todo.completed).length;
      this.completedTasks = todos.filter((todo: Todo) => todo.completed).length;
    });
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
