import { createReducer, on } from '@ngrx/store';

import { pizzasActions } from '../actions/pizzas.actions';
import { PizzaEntities, PizzasState } from '../models';
import { Pizza } from '../../models/pizza.model';

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
    const entities = pizzas.reduce(
      (entities: PizzaEntities, pizza: Pizza) => {
        entities[pizza.id] = pizza;
        return entities;
      },
      { ...state.entities }
    );
    return { ...state, loaded: true, loading: false, entities };
  }),
  on(pizzasActions.loadPizzasError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);

export const getPizzasEntities = (state: PizzasState) => state.entities;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzasLoading = (state: PizzasState) => state.loading;
