import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from '../main/nav-bar/nav-bar.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
