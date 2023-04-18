import { inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { catchError, filter, of, take, tap } from 'rxjs';

import * as fromStore from '../store';

export const canActivatePizzasFn = () => {
  const store = inject(Store);
  return store.select(fromStore.getPizzasLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(fromStore.pizzasActions.loadPizzas());
      }
    }),
    filter((loaded) => loaded),
    take(1),
    catchError(() => of(false))
  );
};
