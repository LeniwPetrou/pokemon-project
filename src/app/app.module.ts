import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './shared/configuration/routing-config';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoaderInterceptor } from './shared/services/interceptor-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    RouterTestingModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
