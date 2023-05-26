import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear ToDo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle ToDo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar ToDo',
  props<{ id: number; texto: string }>()
);

export const eliminar = createAction(
  '[TODO] Eliminar ToDo',
  props<{ id: number }>()
);
