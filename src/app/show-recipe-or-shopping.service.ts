import { EventEmitter } from '@angular/core';

export class ShowRecipeOrShoppingService {
  showWhat: {
    showRecipe: boolean;
    showShopping: boolean;
  };
  constructor() {}
  onRecipeClick() {
    this.showWhat = {
      showRecipe: true,
      showShopping: false,
    };
  }
  onShoppingClick() {
    this.showWhat = {
      showRecipe: false,
      showShopping: true,
    };
  }
}
