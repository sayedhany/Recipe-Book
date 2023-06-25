import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingedients.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {}

  addNew(name: string, amount: number) {
    if (!name || !amount) {
      return;
    }
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientChanged.next(this.ingredients.slice());
    console.log('Work');
  }
  getIngedient() {
    return this.ingredients.slice();
  }
  addIngridents(ingridents: Ingredient[]) {
    this.ingredients.push(...ingridents);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
