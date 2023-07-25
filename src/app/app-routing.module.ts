import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCiudadComponent } from './components/list-ciudad/list-ciudad.component';
import { DetailsCiudadComponent } from './components/details-ciudad/details-ciudad.component';
import { AddCiudadComponent } from './components/add-ciudad/add-ciudad.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: ListCiudadComponent },
  { path: 'tutorials/:id', component: DetailsCiudadComponent },
  { path: 'add', component: AddCiudadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
