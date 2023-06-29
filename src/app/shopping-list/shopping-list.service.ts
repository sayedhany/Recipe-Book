import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingedients.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
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
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngridents(ingridents: Ingredient[]) {
    this.ingredients.push(...ingridents);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIndredient: Ingredient) {
    this.ingredients[index] = newIndredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    const deleted = this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
