import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { PizzaEntities, ProductState } from '../models';
import * as fromReducer from './pizzas.reducers';

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromReducer.pizzaReducer,
};

export const getProductsState = createFeatureSelector<ProductState>('products');
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromReducer.getPizzasEntities
);
export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities: PizzaEntities) =>
    Object.keys(entities).map((entityId) => entities[parseInt(entityId, 10)])
);
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromReducer.getPizzasLoading
);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromReducer.getPizzasLoaded
);
