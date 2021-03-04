import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {DashboardComponent} from './components/dashboard/dashboard.component'
import {MatematicasComponent} from './components/matematicas/matematicas.component'
import {NewsComponent} from './components/news/news.component'
import {LibrosComponent} from './components/libros/libros.component'
import {MateriasComponent} from './components/materias/materias.component'
const routes: Routes = [
  {
    path: 'view/dashboard',
    component:DashboardComponent
  },
  {
    path: 'view/matematicas',
    component:MatematicasComponent
  },
  {
    path: 'view/news',
    component:NewsComponent
  },
  {
    path:'view/libros',
    component:LibrosComponent
  },
  {
    path:'view/materias',
    component:MateriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
