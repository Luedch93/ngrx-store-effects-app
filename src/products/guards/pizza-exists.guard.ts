import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, filter, map, switchMap, take, tap } from 'rxjs';

import * as fromStore from '../store';

export const pizzaExistsGuard: CanActivateFn = (route): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(fromStore.getPizzasLoaded).pipe(
    tap((loaded) => {
      if (!loaded) {
        store.dispatch(fromStore.pizzasActions.loadPizzas());
      }
    }),
    filter((loaded) => loaded),
    take(1),
    switchMap((): Observable<boolean> => {
      const pizzaId = parseInt(route.params['pizzaId'], 10);

      return store
        .select(fromStore.getPizzasEntities)
        .pipe(map((entities) => !!entities[pizzaId]));
    }),
    take(1),
    tap((pizzaExists) => {
      if (!pizzaExists) {
        router.navigate(['/products']);
      }
    })
  );
};
