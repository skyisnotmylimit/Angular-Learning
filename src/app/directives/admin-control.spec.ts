import { AdminControl } from './admin-control';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('AdminControl', () => {
  it('should create an instance', () => {
    const templateRef = {} as TemplateRef<unknown>;
    const viewContainer = {
      clear: () => {},
      createEmbeddedView: () => ({})
    } as unknown as ViewContainerRef;

    const directive = TestBed.runInInjectionContext(
      () => new AdminControl(templateRef, viewContainer)
    );
    expect(directive).toBeTruthy();
  });
});
