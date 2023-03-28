import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { ProductState } from '../models';
import * as fromReducer from './pizzas.reducers';

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromReducer.pizzaReducer,
};

export const getProductsState = createFeatureSelector<ProductState>('products');
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);
export const getAllPizzas = createSelector(
  getPizzaState,
  fromReducer.getPizzasData
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromReducer.getPizzasLoading
);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromReducer.getPizzasLoaded
);
