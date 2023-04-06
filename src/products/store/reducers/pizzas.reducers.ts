import { createReducer, on } from '@ngrx/store';

import { pizzasActions } from '../actions/pizzas.actions';
import { PizzasState } from '../models';
import { Pizza } from '../../models/pizza.model';
import { mapToEntities } from '../../../app/utils/store.utils';

export const initialState: PizzasState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const pizzaReducer = createReducer(
  initialState,
  on(pizzasActions.loadPizzas, (state) => ({
    ...state,
    loading: true,
  })),
  on(pizzasActions.loadPizzasSuccess, (state, { payload }) => {
    const pizzas = payload;
    const entities = mapToEntities<Pizza>(pizzas);
    return { ...state, loaded: true, loading: false, entities };
  }),
  on(pizzasActions.loadPizzasError, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);
