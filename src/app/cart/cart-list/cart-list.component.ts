import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CartService} from "../cart.service";
import {Item} from "../model/item.model";
import {CartItemComponent} from "../cart-item/cart-item.component";
import {Go} from "../../core/+store/router";
import {AppState} from "../../core/+store/app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, AfterViewInit {

  @ViewChildren(CartItemComponent) itemComponents: QueryList<CartItemComponent>;
  items: Array<Item>;
  totalItems: number;

  orderByField: string;
  isAsc: boolean = false;

  constructor(private cartService: CartService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.items = this.cartService.getAll();
  }

  ngAfterViewInit() {
    this.setTotalItems();
    this.itemComponents.changes.subscribe((r) => {
      this.setTotalItems();
    });
  }
  onDirectionChange(value: boolean) {
    this.isAsc = value;
  }
  setTotalItems() {
    setTimeout(() => {
      this.totalItems = this.itemComponents.length;
    });
  }

  onClear(): void {
    this.cartService.clear();
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  order() {
    this.store.dispatch(new Go({path: ['/order']}))
  }
}
