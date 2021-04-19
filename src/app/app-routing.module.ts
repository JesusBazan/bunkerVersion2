import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { DashboardCoorComponent } from './components/dashboard-coor/dashboard-coor.component'
import { DashboardProfComponent } from './components/dashboard-prof/dashboard-prof.component'
import { MatematicasComponent } from './components/matematicas/matematicas.component'
import { NewsComponent } from './components/news/news.component'
import { LibrosComponent } from './components/libros/libros.component'
import { MateriasComponent } from './components/materias/materias.component'
import { InicioComponent } from './components/inicio/inicio.component'
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FirmarComponent } from './components/firmar/firmar.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SideNavMaterialComponent } from './side-nav-material/side-nav-material.component';
import { ProfVanBarComponent } from './prof-van-bar/prof-van-bar.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { EncDesComponent } from './components/enc-des/enc-des.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import {AlumnoComponent} from './components/alumno/alumno.component';
import {ProfesorComponent} from './components/profesor/profesor.component'

const routes: Routes = [
  {
    path: 'view/dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'view/inicio',
        component: InicioComponent
      },
      {
        path: 'view/news',
        component: NewsComponent
      },
      {
        path: 'view/matematicas',
        component: MatematicasComponent
      },
      {
        path: 'view/libros',
        component: LibrosComponent
      },
      {
        path: 'view/materias',
        component: MateriasComponent
      },
      {
        path: 'view/firmar',
        component: FirmarComponent
      },
      {
        path: 'view/encriptardesencriptar',
        component: EncDesComponent
      },
    ]
  },
  {
    path: 'view/dashboardProf',
    component: DashboardProfComponent,
    children: [
      {
        path:'view/inicio/pro',
        component:InicioComponent
      },
      {
        path:'view/reportes',
        component:ReportesComponent
      },
      {
        path:'view/alumnos',
        component:AlumnoComponent
      },
      {
        path: 'view/firmar/pro',
        component: FirmarComponent
      },
      {
        path: 'view/encriptardesencriptar/pro',
        component: EncDesComponent
      },
    ]

  },
  {
    path: 'view/dashboardCoor',
    component: DashboardCoorComponent,
    children: [
      {
        path:'view/inicio/Coor',
        component:InicioComponent
      },
      {
        path:'view/reportes/Coor',
        component:ReportesComponent
      },
      {
        path:'view/alumnos/Coor',
        component:AlumnoComponent
      },
      {
        path:'view/profesores/Coor',
        component:ProfesorComponent
      },
    ]
  },
  {
    path: 'view/footer',
    component: FooterComponent
  },
  {
    path: 'view/chatbot',
    component: ChatbotComponent
  },
  {
    path: 'view/registrarse',
    component: RegisterFormComponent
  },
  {
    path: 'view/dashboardMain',
    component: SideNavMaterialComponent
  },
  {
    path: 'view/dashboardMainProf',
    component: ProfVanBarComponent
  },
  {
    path: 'view/login',
    component: LoginFormComponent
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
export const  APP_ROUTING = RouterModule.forRoot(routes);
