import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

export interface PizzasState {
  entities: Entities<Pizza>;
  loaded: boolean;
  loading: boolean;
}

export interface ToppingsState {
  entities: Entities<Topping>;
  loaded: boolean;
  loading: boolean;
}

export interface ProductState {
  pizzas: PizzasState;
  toppings: ToppingsState;
}

export type Entities<T> = { [id: number]: T };
