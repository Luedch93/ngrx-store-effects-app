import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  template: `
    <div class="product-item">
      <pizza-form
        [pizza]="(pizza$ | async) ?? undefined"
        [toppings]="(toppings$ | async) ?? undefined"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)"
      >
        <pizza-display [pizza]="(visualize$ | async) ?? undefined">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$!: Observable<Pizza>;
  visualize$!: Observable<Pizza>;
  toppings$!: Observable<Topping[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
      tap((pizza: Pizza) => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists
          ? pizza.toppings?.map((topping) => topping.id)
          : [];
        this.store.dispatch(
          fromStore.toppingsActions.visualizeToppings({ payload: toppings })
        );
      })
    );
    this.toppings$ = this.store.select(fromStore.getToppings);
    this.visualize$ = this.store.select(fromStore.getPizzaVisualized);
  }

  onSelect(event: number[]) {
    this.store.dispatch(
      fromStore.toppingsActions.visualizeToppings({ payload: event })
    );
  }

  onCreate(event: Pizza) {
    this.store.dispatch(
      fromStore.pizzasActions.createPizza({ payload: event })
    );
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(
      fromStore.pizzasActions.updatePizza({ payload: event })
    );
  }

  onRemove(event: Pizza) {
    const confirmed = confirm('Are you sure you want to delete pizza?');
    if (confirmed) {
      this.store.dispatch(
        fromStore.pizzasActions.deletePizza({ payload: event })
      );
    }
  }
}
