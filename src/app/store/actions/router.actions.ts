import { NavigationExtras, Params } from '@angular/router';

import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const routerActions = createActionGroup({
  source: 'Router',
  events: {
    Go: props<{
      payload: {
        path: string[];
        query?: Params;
        extras?: NavigationExtras;
      };
    }>(),
    Back: emptyProps(),
    Forward: emptyProps(),
  },
});
