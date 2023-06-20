import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() newValue = new EventEmitter<{ name: string; amount: number }>();
  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.newValue.emit({ name: name.value, amount: +amount.value });
    name.value = '';
    amount.value = '';
  }
}
