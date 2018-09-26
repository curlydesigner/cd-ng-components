import { TestBed, inject } from '@angular/core/testing';

import { CurlyDesignerComponentsService } from './curly-designer-components.service';

describe('CurlyDesignerComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurlyDesignerComponentsService]
    });
  });

  it('should be created', inject([CurlyDesignerComponentsService], (service: CurlyDesignerComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
