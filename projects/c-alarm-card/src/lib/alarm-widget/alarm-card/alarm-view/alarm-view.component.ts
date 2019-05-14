import { Component, OnInit } from '@angular/core'
import { pieData } from './data';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group
} from '@angular/animations';


import { AlarmService } from '../../alarm.service'

@Component({
  selector: 'alarm-view',
  templateUrl: './alarm-view.component.html',
  styleUrls: ['./alarm-view.component.css'],
  animations: [
    trigger('trgSlide', [
      transition(":increment", group([
        query(':enter', [
          style({ left: '100%', width: "500px" }),
          animate('0.5s ease-out', style("*"))
        ], { optional: true }),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '-100%' }))
        ], { optional: true })
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({ left: '-100%' }),
          animate('0.5s ease-out', style("*"))
        ], { optional: true }),
        query(':leave', [
          animate('0.5s ease-out', style({ left: '100%', width: "500px" }))
        ], { optional: true })
      ])),
    ])
  ],

})
export class AlarmViewComponent implements OnInit {

  pieData: any[];

  constructor(private service: AlarmService) { Object.assign(this, { pieData }) }
  alarms = [];
  groupedAlarms = [];
  alarmTypes = [1, 3, 4]
  selectedIndex: number = -1;
  get _groupedAlarms() {
    let result;

    result = this.groupedAlarms && this.selectedIndex>-1
      ? [this.groupedAlarms[this.selectedIndex]]
      : []
      
    return result

  }


  ngOnInit() {
    this.getAlarmsFromService();
  }

  getAlarmsFromService() {
    this.service.fetchAlarmView()
      .subscribe(result => {
        this.alarms = result;
        this.alarmTypes.forEach(t => {
          let grp = result.filter(a => a.alarmTypeId == t);
          this.groupedAlarms.push(grp);
          console.log("groupedAlarms : ", grp);
        })

      });
  }


  previous() {
    this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
  }

  next() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this.groupedAlarms.length - 1);
  }
}
