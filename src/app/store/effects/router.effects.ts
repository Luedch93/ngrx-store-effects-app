import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { createEffect, ofType, Actions } from '@ngrx/effects';

import { map, tap } from 'rxjs';

import { routerActions } from '../actions';

@Injectable()
export class RouterEffects {
  go$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.go),
        map((action) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  back$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  forward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
