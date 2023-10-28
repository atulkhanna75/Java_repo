import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductV5Component } from './product-v5.component';

describe('ProductV5Component', () => {
  let component: ProductV5Component;
  let fixture: ComponentFixture<ProductV5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductV5Component]
    });
    fixture = TestBed.createComponent(ProductV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
