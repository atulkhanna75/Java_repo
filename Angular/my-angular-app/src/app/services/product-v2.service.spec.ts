import { TestBed } from '@angular/core/testing';

import { ProductV2Service } from './product-v2.service';

describe('ProductV2Service', () => {
  let service: ProductV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
