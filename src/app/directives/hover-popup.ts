import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverPopup]',
})
export class HoverPopup {
  private hoverClasses = ['scale-105', 'shadow-xl', 'z-10'];

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.renderer.addClass(this.el.nativeElement, 'transition-transform');
    this.renderer.addClass(this.el.nativeElement, 'duration-300');
    this.renderer.addClass(this.el.nativeElement, 'ease-in-out');
  }

  @HostListener('mouseenter') onMouseEnter() {
    for (const cls of this.hoverClasses) {
      this.renderer.addClass(this.el.nativeElement, cls);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    for (const cls of this.hoverClasses) {
      this.renderer.removeClass(this.el.nativeElement, cls);
    }
  }
}
