import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneView } from './phone-view';

describe('PhoneView', () => {
  let component: PhoneView;
  let fixture: ComponentFixture<PhoneView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
