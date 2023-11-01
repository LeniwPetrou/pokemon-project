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

    getApiCall(name: string): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/ability/${name}/`).pipe(
        shareReplay(1),
        map((response: any) => {
          let results$ = response.effect_entries[1];
          let list$ = [];
          list$.push(results$);
          console.log(results$);
          return list$;
        }
        )
      )

    }
  }
  