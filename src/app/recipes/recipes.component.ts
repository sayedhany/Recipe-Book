import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit, OnDestroy {
  // recipeInfo: Recipe;
  isSub: Subscription;
  constructor() {}
  ngOnInit(): void {
    // this.isSub = this.recipeService. recipeSelected.subscribe((recipe) => {
    //   this.recipeInfo = recipe;
    // });
  }
  ngOnDestroy(): void {
    // this.isSub.unsubscribe();
  }
}
