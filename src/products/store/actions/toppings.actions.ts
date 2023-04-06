import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Topping } from '../../models/topping.model';

export const toppingsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load Toppings': emptyProps(),
    'Load Toppings Success': props<{ payload: Topping[] }>(),
    'Load Toppings Fail': props<{ payload: string }>(),
  },
});
