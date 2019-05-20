import { Component } from '@angular/core';
import { ToolboxComponent } from '../toolbox-decorator';

 @ToolboxComponent({
   desc: 'Alarm Card',
   icon: 'fa fa-chart-bar',
   componentName : 'AlarmCardComponent'
 })

@Component({
  selector: 'pack-alarm-card-container',
  template: `
  <div class="c-scene">
  <div style="text-align:right"><button mat-button class="c-btn-icon" ngbButton (click)="flipIt()"> <mat-icon>settings</mat-icon></button></div>
  <div id="card-animation" class="c-card" [class.voted]="flipped">
      <div class="card__face card__face--front">
          <alarm-settings></alarm-settings>
      </div>
      <div class="card__face card__face--back">
          <alarm-view></alarm-view>
      </div>
  </div>
</div>`,
  styleUrls: ['./alarm-card.component.css']
})

export class AlarmCardComponent {

  flipped = true;
  flipIt() {
    this.flipped = !this.flipped;
  }

}