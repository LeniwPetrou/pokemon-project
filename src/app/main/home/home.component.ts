import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.setBackgroundImage('https://external-preview.redd.it/aX_ICsH1TefshXNcBBSQ92YRwFstM3rHMzrUfMYGvvM.jpg?auto=webp&s=09c65d185975ce69c5c5a632166d0456b0106293');
  }

  private setBackgroundImage(imagePath: string): void {
    this.renderer.setStyle(document.body, 'background-image', `url(${imagePath})`);
  }
}
