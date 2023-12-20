import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todos/models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {

    switch (filter) {
      case 'completados':
        return todos.filter((todo: Todo) => todo.completed)
    
      case 'pendientes':
        return todos.filter((todo: Todo) => !todo.completed)
    
      default:
        return todos
    }
  }

}
