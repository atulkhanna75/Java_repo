import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductV3Component } from './product-v3.component';

describe('ProductV3Component', () => {
  let component: ProductV3Component;
  let fixture: ComponentFixture<ProductV3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductV3Component]
    });
    fixture = TestBed.createComponent(ProductV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
