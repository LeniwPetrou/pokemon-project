import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/component/pokemon.component';

const routes: Routes = [
  { 
    path: '**', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    loadComponent: () => 
      import('./pokemon/component/pokemon.component').then(c => c.PokemonComponent)
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
