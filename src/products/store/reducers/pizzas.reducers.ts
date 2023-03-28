import { createReducer, on } from '@ngrx/store';

import { pizzasActions } from '../actions/pizzas.actions';
import { PizzasState } from '../models';

export const initialState: PizzasState = {
  data: [],
  loaded: false,
  loading: false,
};

export const pizzaReducer = createReducer(
  initialState,
  on(pizzasActions.loadPizzas, (state) => ({
    ...state,
    loading: true,
  })),
  on(pizzasActions.loadPizzasSuccess, (state, { payload }) => ({
    ...state,
    loaded: true,
    loading: false,
    data: payload,
  })),
  on(pizzasActions.loadPizzasError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);

export const getPizzasData = (state: PizzasState) => state.data;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasLoading = (state: PizzasState) => state.loading;
