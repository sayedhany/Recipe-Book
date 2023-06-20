import { Recipe } from './../../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeInfo = new EventEmitter<Recipe>();
  onRecipeClick(recipe: Recipe) {
    this.recipeInfo.emit(recipe);
  }
}
