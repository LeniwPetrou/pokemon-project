import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, from, map, of, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class PokemonService {
  
    baseUrl: string = `${environment.apiBaseUrl}`;
    public _count$: Subject<number> = new Subject();
    public count$: Observable<number> = this._count$.asObservable(); 
  
    constructor(
      private http: HttpClient
    ) { }

    getPokemons(offset: number, limit: number): Observable<any>{
      // return this.http.get<any[]>(`${this.baseUrl}v2/pokemon?offset=${offset}&limit=${limit}`).pipe(
      //   shareReplay(1),
      //   map((response: any) => {
      //     console.log('response.results::: ', response)
      //     let results$ = response.results;
      //     console.log('results$', results$);
      //     return results$; 
      //   }
      //   )
      // )
      this._count$.next(0);
      return this.http.get<any[]>(`${this.baseUrl}v2/pokemon?offset=${offset}&limit=${limit}`).pipe(
        shareReplay(1),
        // tap((response: any) => {
        //   this._count$.next(response.count);
        // }),
        map((response: any) => {
          let results$ = response.results;
          return results$;
        }
        )
      )

    }
  }
  