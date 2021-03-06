import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//imports de Material Desidn
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox'; 





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { SideNavMaterialComponent } from './side-nav-material/side-nav-material.component';


import { MateriasComponent } from './components/materias/materias.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NewsComponent } from './components/news/news.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { AnunciosService} from './services/anuncios/anuncios.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LoginFormComponent} from './components/login-form/login-form.component'
import { SimpleNotificationsModule} from 'angular2-notifications'


import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FirmarComponent } from './components/firmar/firmar.component';
import { from } from 'rxjs';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProfVanBarComponent } from './prof-van-bar/prof-van-bar.component';
import { AddNewFormComponent } from './components/add-new-form/add-new-form.component';
import { DashboardProfComponent } from './components/dashboard-prof/dashboard-prof.component';
import { DashboardCoorComponent } from './components/dashboard-coor/dashboard-coor.component';
import { CoorNavBarComponent } from './coor-nav-bar/coor-nav-bar.component';
import { EncDesComponent } from './components/enc-des/enc-des.component';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './components/reportes/reportes.component';
import { TableComponent } from './components/table/table.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { SelectionTableComponent } from './components/selection-table/selection-table.component';
import { AlumnosTableComponent } from './components/alumnos-table/alumnos-table.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { ProfesorFormComponent } from './components/profesor-form/profesor-form.component';
import { ProfesorTableComponent } from './components/profesor-table/profesor-table.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    MatematicasComponent,
    SideNavMaterialComponent,
    MateriasComponent,
    LibrosComponent,
    NewsComponent,
    CardNewsComponent,
    InicioComponent,
    FooterComponent,
    ChatbotComponent,
    FirmarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfVanBarComponent,
    AddNewFormComponent,
    DashboardProfComponent,
    DashboardCoorComponent,
    CoorNavBarComponent,
    EncDesComponent,
    ReportesComponent,
    TableComponent,
    AlumnoComponent,
    SelectionTableComponent,
    AlumnosTableComponent,
    AlumnoFormComponent,
    ProfesorFormComponent,
    ProfesorTableComponent,
    ProfesorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    SimpleNotificationsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule    
    
    

  ],
  providers: [
    AnunciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
