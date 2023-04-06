import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { toppingsActions } from '../actions';
import { ToppingsService } from '../../services';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ToppingsEffects {
  loadToppings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toppingsActions.loadToppings),
      switchMap(() => {
        return this.toppingsService.getToppings().pipe(
          map((toppings) => {
            return toppingsActions.loadToppingsSuccess({ payload: toppings });
          }),
          catchError(() => {
            return of(toppingsActions.loadToppingsFail({ payload: '' }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private toppingsService: ToppingsService
  ) {}
}
