import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../services/http-service';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [MatButtonModule]
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
