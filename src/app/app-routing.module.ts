import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {DashboardComponent} from './components/dashboard/dashboard.component'
import {MatematicasComponent} from './components/matematicas/matematicas.component'

const routes: Routes = [
  {
    path: 'view/dashboard',
    component:DashboardComponent
  },
  {
    path: 'view/matematicas',
    component:MatematicasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
