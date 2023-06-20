import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  @Output() recipe = new EventEmitter<Recipe>();
  getRecipeInfo(recipeInfo: Recipe) {
    console.log('from recipe-list', recipeInfo);

    this.recipe.emit(recipeInfo);
  }
}
