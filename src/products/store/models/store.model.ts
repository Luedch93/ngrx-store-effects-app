import { Pizza } from '../../models/pizza.model';

export interface PizzasState {
  entities: PizzaEntities;
  loaded: boolean;
  loading: boolean;
}

export interface ProductState {
  pizzas: PizzasState;
}

export type PizzaEntities = { [id: number]: Pizza };
