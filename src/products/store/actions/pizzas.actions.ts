import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const pizzasActions = createActionGroup({
  source: '[Products]',
  events: {
    'Load Pizzas': emptyProps(),
    'Load Pizzas Success': props<{ payload: Pizza[] }>(),
    'Load Pizzas Error': props<{ payload: string }>(),
  },
});
