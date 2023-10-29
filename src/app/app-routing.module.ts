import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/component/pokemon.component';

const routes: Routes = [
  { 
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  // { 
  //   path: 'pokemon',
  //   loadComponent: () => ('./pokemon/pokemon.component').then(m) => m.PokemonComponent 
  // },
  // {
  //   path: 'pokemon',
  //   component: () => 
  //     import('./pokemon/pokemon.component').then(x => x.PokemonComponent)
  // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
