import { Injectable } from '@angular/core';
import { IActionConfig } from 'src/app/shared/interfaces/actions-interface';

@Injectable({
    providedIn: 'root'
  })
  export class ActionsConfigService {
    
    public getActionConfig(): IActionConfig[] {
        return [
          {
            title: 'Clear them all',
            icon: 'delete',
            color: 'accent',
            action: 'reset'
          },
          {
          title: 'Get me the species',
          icon: 'bolt',
          color: 'primary',
          action: 'search'
        }
      ]
    }
  }
  