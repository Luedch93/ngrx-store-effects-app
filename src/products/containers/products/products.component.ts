import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { reducers } from '../../store';
import { Pizza } from '../../models/pizza.model';
import { PizzasState, ProductStore } from '../../models/store.model';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new"> New Pizza </a>
      </div>
      <div class="products__list">
        <div *ngIf="!pizzas?.length">No pizzas, add one to get started.</div>
        <pizza-item *ngFor="let pizza of pizzas" [pizza]="pizza"> </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas!: Pizza[];

  constructor(private store: Store<ProductStore>) {}

  ngOnInit() {
    this.store.select<any>('products').subscribe(console.log);
  }
}
