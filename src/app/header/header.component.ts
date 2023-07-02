import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService) {}
  onStoreRecipes() {
    this.dataStorage.storeRecipes();
  }
  onFetchRecipes() {
    this.dataStorage.fetchData().subscribe();
  }
}
