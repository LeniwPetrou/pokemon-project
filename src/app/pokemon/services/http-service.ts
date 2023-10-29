import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class PokemonService {
  
    baseUrl: string = `${environment.apiBaseUrl}`;
  
    constructor(
      private http: HttpClient
    ) { }

    getPokemons(){
      return this.http.get<any>(`${this.baseUrl}v2/pokemon`).subscribe(
          data => {
            console.log('pokemons:: ', data)
          }
        )
    }

  }
  