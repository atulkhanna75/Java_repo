import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductV4Component } from './product-v4.component';

describe('ProductV4Component', () => {
  let component: ProductV4Component;
  let fixture: ComponentFixture<ProductV4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductV4Component]
    });
    fixture = TestBed.createComponent(ProductV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
