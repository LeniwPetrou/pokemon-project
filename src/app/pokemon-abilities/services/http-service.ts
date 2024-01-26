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

    search(): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/ability/`).pipe(
        shareReplay(1),
        map((response: any) => {
          console.log(response)
          let results$ = response.results;
          return results$;
        }
        )
      )
    }

    searchByName(name: string): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/ability/${name}/`).pipe(
        shareReplay(1),
        map((response: any) => {
          console.log('abilities',response)
          let results$ = response.effect_entries[1];
          let list$ = [];
          list$.push(results$);
          return list$;
        }
        )
      )
    }
  }
  