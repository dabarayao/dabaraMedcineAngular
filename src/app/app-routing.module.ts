import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './views/accueil/accueil.component';
import { SuivantComponent } from './views/suivant/suivant.component';
import { ContenuComponent } from './views/contenu/contenu.component';

const routes:Routes = [
  {path:'',component:AccueilComponent},
  {path:'suivant',component:SuivantComponent},
  {path:'contenu',component:ContenuComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports:[RouterModule],
declarations: [],
})
export class AppRoutingModule { }
