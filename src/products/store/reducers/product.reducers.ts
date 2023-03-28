import { createReducer, on } from '@ngrx/store';

import { productActions } from '../actions/product.actions';
import { PizzasState } from '../../../products/models/store.model';

export const initialState: PizzasState = {
  data: [
    {
      name: "Blazin' Inferno",
      toppings: [
        {
          id: 10,
          name: 'pepperoni',
        },
        {
          id: 9,
          name: 'pepper',
        },
        {
          id: 3,
          name: 'basil',
        },
        {
          id: 4,
          name: 'chili',
        },
        {
          id: 7,
          name: 'olive',
        },
        {
          id: 2,
          name: 'bacon',
        },
      ],
      id: 1,
    },
  ],
  loaded: false,
  loading: false,
};

export const productReducer = createReducer(
  initialState,
  on(productActions.loadPizzas, (state) => ({
    ...state,
    loading: true,
  })),
  on(productActions.loadPizzasSuccess, (state, { payload }) => ({
    ...state,
    loaded: true,
    loading: false,
    data: payload,
  })),
  on(productActions.loadPizzasError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);
