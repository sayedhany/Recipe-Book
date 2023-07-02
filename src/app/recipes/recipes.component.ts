import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [],
})
export class RecipesComponent implements OnInit, OnDestroy {
  // recipeInfo: Recipe;
  isSub: Subscription;
  constructor(private dataStorage: DataStorageService) {}
  ngOnInit(): void {
    // this.dataStorage.fetchData()
  }
  ngOnDestroy(): void {
    // this.isSub.unsubscribe();
  }
}
