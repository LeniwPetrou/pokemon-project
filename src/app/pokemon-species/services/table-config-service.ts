import { Injectable } from '@angular/core';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';

@Injectable({
    providedIn: 'root'
  })
  export class TableConfigService {
    
    public getColumnConfig(): IColumnConfig {
        return {
          flavor_text: {
            key: 'flavor_text',
            title: 'flavor_text'
        }
      }
    }
  }
  