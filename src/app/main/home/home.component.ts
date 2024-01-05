import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/shared/services/background-image-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

  constructor(private backgroundService: BackgroundService) {}

  ngOnInit() {
    this.backgroundService.setBackground('https://external-preview.redd.it/aX_ICsH1TefshXNcBBSQ92YRwFstM3rHMzrUfMYGvvM.jpg?auto=webp&s=09c65d185975ce69c5c5a632166d0456b0106293');
  }
}
