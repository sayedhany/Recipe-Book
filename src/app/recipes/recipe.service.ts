import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../shared/ingedients.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('meet', 5), new Ingredient('french Fries', 50)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Buns', 5), new Ingredient('Meat', 60)]
    ),
  ];
  constructor() {}
  getRecipes() {
    return this.recipes.slice();
  }
}
