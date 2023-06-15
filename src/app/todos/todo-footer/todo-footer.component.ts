import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: validFilters = 'todos';
  filters: validFilters[] = ['todos', 'completados', 'pendientes'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
      this.store.select('filter').subscribe(filter => this.actualFilter = filter);
  }

  changeFilter(filter: validFilters) {
    this.store.dispatch(setFilter({ filter }))
  }
}
