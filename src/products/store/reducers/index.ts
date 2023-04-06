import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ProductState } from '../models';
import * as fromReducer from './pizzas.reducers';

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromReducer.pizzaReducer,
};

export const getProductsState = createFeatureSelector<ProductState>('products');
