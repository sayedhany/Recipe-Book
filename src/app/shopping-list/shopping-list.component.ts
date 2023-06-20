import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingedients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  newShopping: Ingredient;
  constructor() {}
  getNewValue(newValue: { name: string; amount: number }) {
    this.newShopping = new Ingredient(newValue.name, newValue.amount);
    this.ingredients.push(this.newShopping);
  }
}
