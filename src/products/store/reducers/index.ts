import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ProductState } from '../models';
import * as fromPizza from './pizzas.reducers';
import * as fromToppings from './toppings.reducers';

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizza.pizzaReducer,
  toppings: fromToppings.toppingsReducer,
};

export const getProductsState = createFeatureSelector<ProductState>('products');
