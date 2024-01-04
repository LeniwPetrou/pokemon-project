import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ExpandedElementComponent } from './components/expanded-element/expanded-element.component';
import { TableScrollingViewportComponent } from './components/table-scrolling-viewport/table-scrolling-viewport.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './services/interceptor-service';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: LoaderInterceptor,
  //     multi: true
  //   }],
  bootstrap: []
})
export class SharedModule { }
