import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productv2Component } from './product-v2.component';

describe('Productv2Component', () => {
  let component: Productv2Component;
  let fixture: ComponentFixture<Productv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Productv2Component]
    });
    fixture = TestBed.createComponent(Productv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
