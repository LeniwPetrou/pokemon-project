import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, map, of, shareReplay, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class PokemonService {
  
    baseUrl: string = `${environment.apiBaseUrl}`;
  
    constructor(
      private http: HttpClient
    ) { }

    getPokemons(): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/pokemon`).pipe(
        shareReplay(1),
        map((response: any) => {
          console.log('response.results::: ', response)
          let results$ = response.results;
          return results$; 
        }
        )
      )
    }
  }
  