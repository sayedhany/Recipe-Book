import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeInfo: Recipe;
  recipeInfo: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id']);
    this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.recipeInfo = this.recipeService.getRecipe(this.id);
    });
  }
  onAddShoppingList() {
    // this.recipeService.addIngridents(this.recipeInfo.ingredients);
  }
}
