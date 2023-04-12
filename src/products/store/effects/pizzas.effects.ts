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

  createPizza$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzasActions.createPizza),
      map((action) => action.payload),
      switchMap((pizza) =>
        this.pizzaService.createPizza(pizza).pipe(
          map((pizza) => pizzasActions.createPizzaSuccess({ payload: pizza })),
          catchError((err) => of(pizzasActions.createPizzaFail(err)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private pizzaService: PizzasService) {}
}
