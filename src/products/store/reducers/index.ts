import { ActionReducerMap } from '@ngrx/store';

import { ProductStore } from '../../models/store.model';
import { productReducer } from './product.reducers';

export const reducers: ActionReducerMap<ProductStore> = {
  pizzas: productReducer,
};
