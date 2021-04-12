import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsaListComponent } from './coasters/usa-list/usa-list.component';
import { EuropeListComponent } from './coasters/europe-list/europe-list.component';
import { AsiaListComponent } from './coasters/asia-list/asia-list.component';
import { HomeComponent } from './coasters/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usa', component: UsaListComponent },
  { path: 'europe', component: EuropeListComponent },
  { path: 'asia', component: AsiaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
