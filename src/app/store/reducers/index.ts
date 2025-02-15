import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  ActivatedRouteSnapshot,
  Params,
  RouterStateSnapshot,
} from '@angular/router';

import * as fromRouter from '@ngrx/router-store';

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl>
{
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return {
      url,
      queryParams,
      params,
    };
  }
}
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
