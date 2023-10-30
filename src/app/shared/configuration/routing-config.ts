import { Routes } from '@angular/router';
import { PokemonComponent } from 'src/app/pokemon/component/pokemon.component';
import { HomeComponent } from 'src/app/main/home/home.component';

  export const routes: Routes = [
    { 
      path: 'home',
      component: HomeComponent 
    },
    { 
      path: 'pokemon',
      component: PokemonComponent
    }
  ]


  