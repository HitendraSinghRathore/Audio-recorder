import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioFilesService {
  public Audio: AudioFile[] = [];
  constructor() { }
}

interface AudioFile{
  fileName: string;
  filePath: string;
}