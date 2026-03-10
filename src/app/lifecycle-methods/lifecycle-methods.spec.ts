import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleMethods } from './lifecycle-methods';

describe('LifecycleMethods', () => {
  let component: LifecycleMethods;
  let fixture: ComponentFixture<LifecycleMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleMethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleMethods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
