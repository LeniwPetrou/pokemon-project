import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class SharedService {

    baseUrl: string = `${environment.apiBaseUrl}`;

    constructor(private http: HttpClient) { }

    searchAbilities(): Observable<any>{
      return this.http.get<any[]>(`${this.baseUrl}v2/ability/`).pipe(
        shareReplay(1),
        map((response: any) => {
          console.log(response)
          let results$ = response.results.map((element:any) => {
             return {
              'key': element.name,
              'value': element.name
             } 
          })
          return results$;
        }
        )
      )
    } 
  }
  
  