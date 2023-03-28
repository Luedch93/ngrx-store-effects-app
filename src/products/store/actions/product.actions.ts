import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Pizza } from 'src/products/models/pizza.model';

export const productActions = createActionGroup({
  source: '[Products]',
  events: {
    'Load Pizzas': emptyProps(),
    'Load Pizzas Success': props<{ payload: Pizza[] }>(),
    'Load Pizzas Error': props<{ payload: string }>(),
  },
});
