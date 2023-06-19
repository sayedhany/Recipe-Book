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
  show: boolean = false
  setcolor = false
  constructor() {
    setTimeout(() => {
      this.btnDisable = !this.btnDisable;
    }, 2000);
  }
  onInputType(event: any) {
    this.show = true
    // console.log(event);
    const value = (<HTMLInputElement>event.target).value;
    console.log(value);
  }
  getColor(){
    return this.setcolor ? "danger" : "primary"
  }
}
