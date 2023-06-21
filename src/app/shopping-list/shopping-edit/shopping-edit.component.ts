import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  
  constructor(private shoppingListService: ShoppingListService) {}
  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    // this.newVa/lue.emit({ name: name.value, amount: +amount.value });
    this.shoppingListService.addNew(name.value, +amount.value);
    name.value = '';
    amount.value = '';
  }
}
