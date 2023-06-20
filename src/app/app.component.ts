import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-app';
  numId: number = 50;
  btnDisable: boolean = false;
  show: boolean = false;
  setcolor = false;
  showRecipe: boolean = true;
  showShopping: boolean = false;
  constructor() {
    setTimeout(() => {
      this.btnDisable = !this.btnDisable;
    }, 2000);
  }
  onInputType(event: any) {
    this.show = true;
    // console.log(event);
    const value = (<HTMLInputElement>event.target).value;
    console.log(value);
  }
  showRecipeOrShoppingClicked(states: {
    showRecipe: boolean;
    showShopping: boolean;
  }) {
    this.showRecipe = states.showRecipe;
    this.showShopping = states.showShopping;
    console.log(this.showRecipe, this.showShopping);
  }
}
