import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromProducts from '../../store';

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
    this.store.dispatch(fromProducts.toppingsActions.loadToppings());
    this.pizza$ = this.store.select(fromProducts.getSelectedPizza);
    this.toppings$ = this.store.select(fromProducts.getToppings);
    this.visualize$ = this.store.select(fromProducts.getPizzaVisualized);
  }

  onSelect(event: number[]) {
    this.store.dispatch(
      fromProducts.toppingsActions.visualizeToppings({ payload: event })
    );
  }

  onCreate(event: Pizza) {}

  onUpdate(event: Pizza) {}

  onRemove(event: Pizza) {}
}
