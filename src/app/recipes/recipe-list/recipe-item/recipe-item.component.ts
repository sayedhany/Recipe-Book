import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from './../../recipe.service';
// import { Recipe } from './../../../recipe.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipe: Recipe;
  // @Input() index: number;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit(): void {
    // console.log(this.recipe, 'test');
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
