import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear ToDo',
    props<{texto: string}>()
);

export const toggle = createAction(
    '[TODO] Toggle ToDo',
    props<{id: number}>()
);