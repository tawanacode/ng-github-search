import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { SingleItemPageComponent } from './single-item-page/single-item-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SingleItemPageGuard } from './single-item-page/single-item-page.guard';

const routes: Routes = [
  { path: 'search-page', component: SearchFormComponent },
  { path: 'search-page/:name/:repo', component: SingleItemPageComponent, canActivate: [SingleItemPageGuard]},
  { path: '', redirectTo: 'search-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'search-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
