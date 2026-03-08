import { HoverPopup } from './hover-popup';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HoverPopup', () => {
  it('should create an instance', () => {
    const nativeElement = document.createElement('div');
    const elementRef = new ElementRef<HTMLElement>(nativeElement);
    const renderer = {
      addClass: () => {},
      removeClass: () => {}
    } as unknown as Renderer2;

    const directive = new HoverPopup(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
