import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../app/components/home/home.component';
import { Punto2Component } from './../app/components/punto2/punto2.component';
import { Punto3Component } from './../app/components/punto3/punto3.component';
import { Punto4Component } from './../app/components/punto4/punto4.component';
import { Punto5Component } from './../app/components/punto5/punto5.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'punto2', component: Punto2Component },
  { path: 'punto3', component: Punto3Component },
  { path: 'punto4', component: Punto4Component },
  { path: 'punto5', component: Punto5Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
