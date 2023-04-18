import { inject } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { catchError, filter, of, take, tap } from 'rxjs';

export const toppingsGuardFn = () => {
  const store = inject(Store);
  return store.select(fromStore.getToppingsLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(fromStore.toppingsActions.loadToppings());
      }
    }),
    filter((loaded) => loaded),
    take(1),
    catchError(() => of(false))
  );
};
