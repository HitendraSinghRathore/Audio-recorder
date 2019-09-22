import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerDisplay'
})
export class TimerDisplayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let mintues = 0;
    let seconds = 0;
    let secondString = "";
    let minuteString = "";
    seconds = value % 60 ;
    mintues = Math.floor(value / 60) ;
    if(seconds < 10) {
      secondString = `0${seconds}`;
    } else {
      secondString = `${seconds}`;
    }
    if (mintues < 10) {
      minuteString = `0${mintues}`;
    } else {
      minuteString = `${mintues}`;
    }
    return `${minuteString}:${secondString}`;
  }

}
