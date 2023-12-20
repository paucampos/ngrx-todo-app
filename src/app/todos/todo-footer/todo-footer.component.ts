import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  actualFilter: validFilters = 'todos';
  filters: validFilters[] = ['todos', 'completados', 'pendientes'];
  pendingTasks: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.actualFilter = state.filter;
      this.pendingTasks = state.todos
        .filter((todo: Todo) => !todo.completed).length;
    });
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }));
  }
}
