import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, forkJoin, map, of, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class HttpService {
  
    baseUrl: string = `${environment.apiBaseUrl}`;
  
    constructor(
      private http: HttpClient
    ) { }

    search(offset: number, limit: number): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/pokemon?offset=${offset}&limit=${limit}`).pipe(
        shareReplay(1),
        map((response: any) => {
          let results$ = response.results;
          return results$;
        }
        )
      )
    }

    searchByName(url: string): Observable<any>{
      return this.http.get<any[]>(`${url}`).pipe(
        shareReplay(1),
        map((response: any) => {
          return {abilities: response.abilities, img: response.sprites.front_default, experience: response.base_experience}
        })
      )
    }

    // searchByName(url: string): Observable<any>{
    //   return this.http.get<any[]>(`${url}`).pipe(
    //     shareReplay(1),
    //     switchMap((response: any) => {
    //       return response.abilities.map((ab: any) => ab.ability.url);
    //     })
    //   )
    // }
  }
  