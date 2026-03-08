import { Directive, TemplateRef, ViewContainerRef, effect, input } from '@angular/core';

@Directive({
  selector: '[appAdminControl]',
})
export class AdminControl {
  readonly appAdminControl = input<boolean>(false);

  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainer: ViewContainerRef
  ) {
    effect(() => {
      this.viewContainer.clear();

      if (this.appAdminControl()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

}
