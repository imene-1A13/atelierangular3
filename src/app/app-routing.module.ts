import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponentComponent } from './actor-component/actor-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';

import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';

import { ToEuroConvertComponentComponent } from './convert-to-euro/to-euro-convert-component.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
 
  {path:'convertiseur',component: ConvertisseurComponentComponent},
  {path:'to-euro-convert',component: ToEuroConvertComponentComponent},
  {path:'actor',component: ActorComponentComponent},
  {path:'actors',component: ActorsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
