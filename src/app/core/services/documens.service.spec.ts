import { TestBed } from '@angular/core/testing';

import { DocumensService } from './documents.service';

describe('DocumensService', () => {
  let service: DocumensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
