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
import { AnunciosService} from './services/anuncios/anuncios.service'
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LoginFormComponent} from './components/login-form/login-form.component'
import { SimpleNotificationsModule} from 'angular2-notifications'

import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FirmarComponent } from './components/firmar/firmar.component';
import { from } from 'rxjs';

import { RegisterFormComponent } from './components/register-form/register-form.component';

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
    RegisterFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    SimpleNotificationsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule

  ],
  providers: [
    AnunciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
