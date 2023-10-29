import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../services/http-service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(
    public pokemonService: PokemonService) { 
  }

  ngOnInit(): void {
  }

  getPokemons (){
    this.pokemonService.getPokemons();
  }

}
