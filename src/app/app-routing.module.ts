import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JediListComponent } from './car-list/car-list.component';
import { JediEditComponent } from './car-edit/car-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'car-list',
    component: JediListComponent
  },
  {
    path: 'car-add',
    component: JediEditComponent
  },
  {
    path: 'car-edit/:id',
    component: JediEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
