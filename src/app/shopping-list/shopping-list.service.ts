import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingedients.model';
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {}

  addNew(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientChanged.emit(this.ingredients.slice());
    console.log('Work');
  }
  getIngedient() {
    return this.ingredients.slice();
  }
}
