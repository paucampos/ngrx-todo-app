import { createReducer, on } from '@ngrx/store';
import { crear, editar, eliminar, toggle, toggleAll, clearCompleted } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Comprar alimento gatos'), // ejemplo
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    // Con map crea un nuevo arreglo
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, text }) => state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: text,
        };
      } else {
        return todo;
      }
    })
  ),
  on(eliminar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completed }) => state.map((todo) => {
      return {
        ...todo,
        completed,
      };
    })),
    on(clearCompleted, state => state.filter((todo) => !todo.completed))
);
