import { createReducer, on, Action } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer<validFilters, Action>(
  initialState,
  on(setFilter, (state: validFilters, { filter }) => filter)
)

export function filterReducer(state = initialState, action: Action) {
    return _filterReducer(state, action);
}
