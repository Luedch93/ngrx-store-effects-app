import { createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers';
import * as fromRoot from '../../../app/store';
import * as fromToppings from './toppings.selector';

import { PizzasState, Entities, ProductState } from '../models';
import { Pizza } from '../../models/pizza.model';

const pizzaState = (state: ProductState) => state.pizzas;
const pizzasEntities = (state: PizzasState) => state.entities;
const pizzasLoaded = (state: PizzasState) => state.loaded;
const pizzasLoading = (state: PizzasState) => state.loading;

export const getPizzaState = createSelector(
  fromReducer.getProductsState,
  pizzaState
);
export const getPizzasEntities = createSelector(getPizzaState, pizzasEntities);
export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.routerReducerSelector,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params['pizzaId']];
  }
);
export const getPizzaVisualized = createSelector(
  getSelectedPizza,
  fromToppings.getToppingsEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingsEntities, selectedEntities) => {
    const toppings = selectedEntities.map((id) => toppingsEntities[id]);
    return {
      ...pizza,
      toppings,
    };
  }
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities: Entities<Pizza>) =>
    Object.keys(entities).map((entityId) => entities[parseInt(entityId, 10)])
);
export const getPizzasLoading = createSelector(getPizzaState, pizzasLoading);
export const getPizzasLoaded = createSelector(getPizzaState, pizzasLoaded);
