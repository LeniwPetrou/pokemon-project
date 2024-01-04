import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ExpandedElementComponent } from './components/expanded-element/expanded-element.component';
import { TableScrollingViewportComponent } from './components/table-scrolling-viewport/table-scrolling-viewport.component';

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
