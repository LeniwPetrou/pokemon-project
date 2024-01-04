import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {

  constructor( private renderer: Renderer2){
  }

  setBackground(imagePath: string): void {
    this.renderer.setStyle(document.body, 'background-image', `url(${imagePath})`);
    }
}
