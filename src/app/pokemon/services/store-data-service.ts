import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
    providedIn: 'root'
  })
  export class StoreDataService {
  
    public pageSize: number = 0;
    public pageIndex: number = 0;

    constructor(
    ) { }

      setPageOptions(pageEvent: PageEvent){
          this.pageSize = pageEvent.pageSize;
          this.pageIndex = pageEvent.pageIndex;
      }

      getPageSize(){
        return this.pageSize;
      }

      getPageIndex(){
        return this.pageIndex;
      }

    }
  
  