import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class StoreDataService {
  
    public pageSize = new BehaviorSubject<number>(0);
    public pageIndex = new BehaviorSubject<number>(0);

    constructor(
    ) { }

      setPageOptions(pageEvent: PageEvent){
        this.pageSize.next(pageEvent.pageSize);
        this.pageIndex.next(pageEvent.pageIndex);
      }
    }
  
  