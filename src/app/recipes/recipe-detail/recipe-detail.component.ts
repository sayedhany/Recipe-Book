import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipeInfo: Recipe;
  constructor(private recipeService: RecipeService) {}
  onAddShoppingList() {
    this.recipeService.addIngridents(this.recipeInfo.ingredients);
  }
}
