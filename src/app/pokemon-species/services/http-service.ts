import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
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

    searchByName(name: string): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/pokemon-species/${name}/`).pipe(
        shareReplay(1),
        map((response: any) => {
          let results$ = response.flavor_text_entries[1];
          console.log(response.flavor_text_entries[1]);
          let list$ = [];
          list$.push(results$);
          return list$;
        }
        )
      )
    }
  }
  