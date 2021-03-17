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
  },
  {
    path:'view/inicio',
    component:InicioComponent
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
    path:'view/firmar',
    component:FirmarComponent
  },
  {
    path:'view/registrarse',
    component:RegisterFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
