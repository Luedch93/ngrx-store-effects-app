import { createSelector } from '@ngrx/store';

import { getProductsState } from '../reducers';
import { Entities, ProductState, ToppingsState } from '../models';
import { Topping } from '../../models/topping.model';

const toppingsState = (productState: ProductState) => productState.toppings;
const toppingsEntities = (toppingsState: ToppingsState) =>
  toppingsState.entities;
const toppingsList = (entities: Entities<Topping>): Topping[] => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
};
const toppingLoading = (toppingsState: ToppingsState) => toppingsState.loading;
const toppingLoaded = (toppingsState: ToppingsState) => toppingsState.loaded;

export const getToppingsState = createSelector(getProductsState, toppingsState);
export const getToppingsEntities = createSelector(
  getToppingsState,
  toppingsEntities
);
export const getToppings = createSelector(getToppingsEntities, toppingsList);
export const getToppingsLoading = createSelector(
  getToppingsState,
  toppingLoading
);
export const getToppingsLoaded = createSelector(
  getToppingsState,
  toppingLoaded
);
