import { Injectable } from '@angular/core';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';

@Injectable({
    providedIn: 'root'
  })
  export class TableConfigService {
    
    public getColumnConfig(): IColumnConfig {
        return {
          name: {
            key: 'name',
            title: 'Name'
        }
      }
    }
  }
  