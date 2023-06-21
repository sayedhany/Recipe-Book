import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService){}
  onRecipeClick(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
