import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';import { SingleItemPageComponent } from './single-item-page/single-item-page.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  { path: 'search-page', component: SearchFormComponent },
  { path: 'search-page/:id', component: SingleItemPageComponent},
  { path: '', redirectTo: 'search-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'search-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
