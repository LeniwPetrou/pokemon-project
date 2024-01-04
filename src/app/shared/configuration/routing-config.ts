import { Routes } from '@angular/router';
import { PokemonComponent } from 'src/app/pokemon/component/pokemon.component';
import { HomeComponent } from 'src/app/main/home/home.component';
import { PokemonAbilitiesComponent } from 'src/app/pokemon-abilities/component/pokemon-abilities.component';
import { PokemonSpeciesComponent } from 'src/app/pokemon-species/component/pokemon-species.component';

  export const routes: Routes = [
    { 
      path: 'home',
      component: HomeComponent 
    },
    { 
      path: 'pokemon',
      component: PokemonComponent
    },
    { 
      path: 'pokemon-abilities',
      component: PokemonAbilitiesComponent
    },
    { 
      path: 'pokemon-species',
      component: PokemonSpeciesComponent
    }
  ]


  