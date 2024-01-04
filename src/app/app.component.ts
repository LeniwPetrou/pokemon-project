import { Component } from '@angular/core';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-project';
  
  constructor(
  ) { }
}
