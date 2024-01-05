import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
    private renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2){
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    setBackground(imagePath: string): void {
    this.renderer.setStyle(document.body, 'background-image', `url(${imagePath})`);
    }
}
