import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    console.log(this.isAuthenticated, 'auth');
  }
  onLogOut() {
    this.authService.logOut();

  }
  onStoreRecipes() {
    this.dataStorage.storeRecipes();
  }
  onFetchRecipes() {
    this.dataStorage.fetchData().subscribe();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
