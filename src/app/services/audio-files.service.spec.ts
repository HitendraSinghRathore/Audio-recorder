import { TestBed } from '@angular/core/testing';

import { AudioFilesService } from './audio-files.service';

describe('AudioFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioFilesService = TestBed.get(AudioFilesService);
    expect(service).toBeTruthy();
  });
});
