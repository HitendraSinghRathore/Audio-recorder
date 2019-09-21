import { AudioFilesService } from './../services/audio-files.service';
import { MediaObject, Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
audio: MediaObject;
playing = false;
fileURI: string;
  constructor(public AudioFiles: AudioFilesService,
              private media: Media,
              private file: File) {

              }
playAudio(filePath: string){
  this.fileURI = filePath;
  this.audio = this.media.create(this.fileURI);
  this.audio.play();
  this.audio.setVolume(1.0);
}




}
