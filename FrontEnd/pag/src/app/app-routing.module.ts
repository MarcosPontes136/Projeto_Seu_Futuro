import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path: 'home', component: HomeComponent},
    {path: 'explore', component: ExploreComponent},
    {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
