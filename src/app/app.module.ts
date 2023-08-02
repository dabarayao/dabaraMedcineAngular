import {Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { ContenuComponent } from './views/contenu/contenu.component';
import { SuivantComponent } from './views/suivant/suivant.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './views/partials/menu/menu.component';
import { FooterComponent } from './views/partials/footer/footer.component';
import { NavComponent } from './views/partials/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContenuComponent,
    SuivantComponent,
    MenuComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  exports:[
    RouterModule,
    FontAwesomeModule
  ],

  providers:[FaIconLibrary],
  bootstrap: [
    AppComponent,
    AccueilComponent,
    ContenuComponent,
    SuivantComponent,
    FooterComponent,
    NavComponent
  ],
})
export class AppModule { }
