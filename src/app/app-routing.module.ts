import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicasComponent } from './componentes/basicas/basicas.component';
import { HomeComponent } from './componentes/home/home.component';
import { MasComponent } from './componentes/mas/mas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'basicas', component: BasicasComponent},
  {path: 'mas', component: MasComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


