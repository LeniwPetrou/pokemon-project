import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/component/pokemon.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
