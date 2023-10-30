import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { PokemonComponent } from 'src/app/pokemon/component/pokemon.component';
import { DynamicTableComponent } from '../components/dynamic-table/dynamic-table.component';

  export const routes: Routes = [
    { 
      path: 'pokemon',
      component: PokemonComponent
    },
    { 
      path: 'dynamic-table',
      component: DynamicTableComponent 
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
  ]


  