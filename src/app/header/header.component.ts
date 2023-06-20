import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  @Output() showRecipeOrShopping = new EventEmitter<{
    showRecipe: boolean;
    showShopping: boolean;
  }>();

  onRecipeClick() {
    this.showRecipeOrShopping.emit({
      showRecipe: true,
      showShopping: false,
    });
  }
  onShoppingClick() {
    this.showRecipeOrShopping.emit({
      showRecipe: false,
      showShopping: true,
    });
  }
}
