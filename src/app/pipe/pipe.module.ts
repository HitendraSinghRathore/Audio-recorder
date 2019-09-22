import { TimerDisplayPipe } from './../timer-display.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [TimerDisplayPipe],
  imports: [
    CommonModule
  ],
  exports: [TimerDisplayPipe]
})
export class PipeModule { 
  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
 }
}
