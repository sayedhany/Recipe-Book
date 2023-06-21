import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingedients.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  newShopping: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngedient();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }
}
