import { Injectable } from '@angular/core';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';

@Injectable({
    providedIn: 'root'
  })
  export class TableService {
    
    public getColumnConfig(): IColumnConfig[] {
        return [
          {
          title: 'name'
        }
      ]
    }
  }
  