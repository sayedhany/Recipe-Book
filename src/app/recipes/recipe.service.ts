import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../shared/ingedients.model';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000',
      [new Ingredient('meet', 5), new Ingredient('french Fries', 50)]
    ),
    new Recipe(
      2,
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?t=st=1687685684~exp=1687686284~hmac=f7f4db4af637b524fe6b48577d687051eb4ddcd0f152569cefb3bf4cc83acde6&w=740',
      [new Ingredient('Buns', 5), new Ingredient('Meat', 60)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngridents(ingridents: Ingredient[]) {
    this.shoppingListService.addIngridents(ingridents);
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id - 1];
  }
}
