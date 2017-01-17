/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchserviceService } from './searchservice.service';

describe('SearchserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchserviceService]
    });
  });

  it('should ...', inject([SearchserviceService], (service: SearchserviceService) => {
    expect(service).toBeTruthy();
  }));
});
