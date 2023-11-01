import { Injectable } from '@angular/core';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';

@Injectable({
    providedIn: 'root'
  })
  export class TableConfigService {
    
    public getColumnConfig(): IColumnConfig {
        return {
          effect: {
            key: 'effect',
            title: 'Effect'
          },
          short_effect: {
            key: 'short_effect',
            title: 'Short Effect'
        }
      }
    }
  }
  