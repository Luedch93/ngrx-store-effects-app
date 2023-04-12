import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const pizzasActions = createActionGroup({
  source: '[Products]',
  events: {
    'Load Pizzas': emptyProps(),
    'Load Pizzas Success': props<{ payload: Pizza[] }>(),
    'Load Pizzas Error': props<{ payload: string }>(),
    // Create
    'Create Pizza': props<{ payload: Pizza }>(),
    'Create Pizza Success': props<{ payload: Pizza }>(),
    'Create Pizza Fail': props<{ payload: string }>(),
    // Update
    'Update Pizza': props<{ payload: Pizza }>(),
    'Update Pizza Success': props<{ payload: Pizza }>(),
    'Update Pizza Fail': props<{ payload: string }>(),
    // Delete
    'Delete Pizza': props<{ payload: Pizza }>(),
    'Delete Pizza Success': props<{ payload: Pizza }>(),
    'Delete Pizza Fail': props<{ payload: string }>(),
  },
});
