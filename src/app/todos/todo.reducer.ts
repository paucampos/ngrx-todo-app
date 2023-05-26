import { createReducer, on } from '@ngrx/store';
import { crear, editar, eliminar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Comprar alimento gatos'), // ejemplo
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    // Con map crea un nuevo arreglo
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(eliminar, (state, { id }) => state.filter((todo) => todo.id !== id))
);
