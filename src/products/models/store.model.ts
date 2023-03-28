import { Pizza } from './pizza.model';

export interface PizzasState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export interface ProductStore {
  pizzas: PizzasState;
}
