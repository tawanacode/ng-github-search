import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleItemPageComponent } from './single-item-page/single-item-page.component';
import { HomeComponent } from './home/home.component';
import { SingleItemPageGuard } from './single-item-page/single-item-page.guard';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'results/:name/:repo', component: SingleItemPageComponent, canActivate: [SingleItemPageGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
