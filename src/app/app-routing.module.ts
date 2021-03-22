import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {DashboardComponent} from './components/dashboard/dashboard.component'
import {MatematicasComponent} from './components/matematicas/matematicas.component'
import {NewsComponent} from './components/news/news.component'
import {LibrosComponent} from './components/libros/libros.component'
import {MateriasComponent} from './components/materias/materias.component'
import {InicioComponent}from './components/inicio/inicio.component'
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FirmarComponent } from './components/firmar/firmar.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SideNavMaterialComponent} from './side-nav-material/side-nav-material.component';
import { ProfVanBarComponent } from './prof-van-bar/prof-van-bar.component'
import { LoginFormComponent } from './components/login-form/login-form.component'

const routes: Routes = [
  {
    path: 'view/dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'view/inicio',
      component:InicioComponent
      },
      {
        path: 'view/news',
        component:NewsComponent
      },
      {
        path: 'view/matematicas',
        component:MatematicasComponent
      },
      {
        path:'view/libros',
        component:LibrosComponent
      },
      {
        path:'view/materias',
        component:MateriasComponent
      },
      {
        path:'view/firmar',
        component:FirmarComponent
      },
    ]
  },
  {
    path:'view/footer',
    component:FooterComponent
  },
  {
    path:'view/chatbot',
    component:ChatbotComponent
  },
  {
    path:'view/registrarse',
    component:RegisterFormComponent
  },
  {
    path:'view/dashboardMain',
    component:SideNavMaterialComponent
  },
  {
    path:'view/dashboardMainProf',
    component:ProfVanBarComponent
  },
  {
    path:'view/login',
    component:LoginFormComponent
  },
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'view/login'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
