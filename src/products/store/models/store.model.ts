import { Pizza } from '../../models/pizza.model';

export interface PizzasState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export interface ProductState {
  pizzas: PizzasState;
}
