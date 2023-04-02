import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Params } from '@angular/router';

import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const routerReducerSelector =
  createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>(
    'routerReducer'
  );
