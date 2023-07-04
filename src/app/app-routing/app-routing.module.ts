import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from '../recipes/recipes-resolver.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent, canActivate: [AuthGuard] },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },

  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
