import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alarm-card',
  template: `
  <div class="scene">
  <div style="text-align:right"><button mat-button class="btn-icon" ngbButton (click)="flipIt()"> <mat-icon>settings</mat-icon></button></div>
  <div id="card-animation" class="card" [class.voted]="flipped">
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

export class AlarmCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flipped = true;
  flipIt() {
    this.flipped = !this.flipped;
  }

}