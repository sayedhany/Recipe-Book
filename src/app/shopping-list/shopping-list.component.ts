import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Ingredient } from '../shared/ingedients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  newShopping: Ingredient;
  isChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.isChangeSub = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }
  onEditItem(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }
  ngOnDestroy(): void {
    this.isChangeSub.unsubscribe();
  }
}
