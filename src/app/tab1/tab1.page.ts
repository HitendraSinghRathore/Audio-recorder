import { TimerDisplayPipe } from './../timer-display.pipe';
import { takeUntil } from 'rxjs/operators';
import { AudioFilesService } from './../services/audio-files.service';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { interval, Observable} from 'rxjs';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  recording = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  timeObservable: any;
  time = 0;

  constructor(private media: Media,
              private file: File,
              public platform: Platform,
              public toastController: ToastController,
              public AudioFiles: AudioFilesService,
              private storage: Storage,
     ) {}
     ngOnInit(): void {
      this.loadFiles();
    }
    startRecord(){
      // tslint:disable-next-line: max-line-length
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.time = 0;
      this.audio = this.media.create(this.filePath);
      this.audio.startRecord();
      this.recording = true;
      this.timeObservable = interval(1000).subscribe(() => {
        this.time++;
      });
    }
    stopRecord(){
      this.audio.stopRecord();
      this.recording = false;
      this.audio.release();
      this.AudioFiles.Audio.unshift({
       fileName: this.fileName,
       filePath: this.filePath
      });
      this.timeObservable.unsubscribe();
      this.time = 0;
      this.storage.set('AudioData', this.AudioFiles.Audio);
      this.successMessage();
    }
    async successMessage(){
      const toast = await this.toastController.create({
        message: `${this.fileName} saved successfully.` ,
        duration: 4000,
        buttons:[
          {
            text: 'Ok',
            role: 'cancel',
          }
        ],
        color: 'dark'
      });
      toast.present();
    }
    loadFiles(){
            this.storage.get('AudioData').then((data) =>{
        this.AudioFiles.Audio = data || [];
      });
        }
}
