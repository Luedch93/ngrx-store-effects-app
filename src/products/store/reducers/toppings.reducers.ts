import { createReducer, on } from '@ngrx/store';

import { toppingsActions } from '../actions/toppings.actions';
import { Topping } from '../../models/topping.model';
import { ToppingsState } from '../models';
import { mapToEntities } from '../../../app/utils/store.utils';

export const toppingsInitialState: ToppingsState = {
  entities: {},
  loading: false,
  loaded: false,
};

export const toppingsReducer = createReducer(
  toppingsInitialState,
  on(toppingsActions.loadToppings, (state) => {
    return {
      ...state,
      loaded: false,
      loading: true,
    };
  }),
  on(toppingsActions.loadToppingsSuccess, (state, { payload }) => {
    const entities = mapToEntities<Topping>(payload);
    return {
      ...state,
      loading: false,
      loaded: true,
      entities,
    };
  }),
  on(toppingsActions.loadToppingsFail, (state) => {
    return {
      ...state,
      loaded: false,
      loading: false,
    };
  })
);
