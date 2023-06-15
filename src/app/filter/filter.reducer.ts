import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer<validFilters, Action>(
  initialState,
  on(setFilter, (state, { filter }) => filter)
)

export function filterReducer(state: validFilters, action: any) {
    return _filterReducer(state, action);
}
