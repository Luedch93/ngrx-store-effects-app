import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, of, switchMap } from 'rxjs';

import { PizzasService } from '../../../products/services';
import { pizzasActions } from '../actions';

@Injectable()
export class PizzaEffects {
  loadPizzas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.loadPizzas),
      switchMap(() =>
        this.pizzaService.getPizzas().pipe(
          map((pizzas) => pizzasActions.loadPizzasSuccess({ payload: pizzas })),
          catchError((err) =>
            of(pizzasActions.loadPizzasError({ payload: err }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private pizzaService: PizzasService) {}
}
