import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe((recipes) => {
      this.recipes = recipes;
      console.log(this.recipes, 'new');
    });
    console.log(this.recipes, 'rec');

    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
