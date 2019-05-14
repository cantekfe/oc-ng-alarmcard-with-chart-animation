import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AlarmViewComponent } from './alarm-card/alarm-view/alarm-view.component';
import {SpeedSetting,AlarmType,AlarmCardSettings, AlarmView} from './model'


const settings:AlarmCardSettings = {
  "speedSettings": [
    {
      "id": 1,
      "name": "1x",
      "value": 200
    },
    {
      "id": 2,
      "name": "2x",
      "value": 200
    },
    {
      "id": 3,
      "name": "3x",
      "value": 1000
    }
  ],
  "alarmList": [
    {
      "id": 1,
      "name": "Kapı Açık",
      "type": "yellow"
    },
    {
      "id": 2,
      "name": "Yüksek Sıcaklık",
      "type": "red"
    },
    {
      "id": 3,
      "name": "Yüksek Basınç",
      "type": "red"
    }
  ],
  "roomList": [
    {
      "id": 1,
      "name": "Meyve Odası"
    },
    {
      "id": 2,
      "name": "Et Odası"
    },
    {
      "id": 3,
      "name": "Meze Odası"
    }
  ]
};

const alarmView:AlarmView[] = [
  {
    "id":1,
    "alarmTypeId":1,
    "name":"Kapı Açık",
    "time":"12:05",
    "roomName":"Meze Odası-1",
    "color":"alarm-1"
   
  },
  {
    "id":2,
    "alarmTypeId":3,
    "name":"Yüksek Sıcaklık",
    "time":"10:10",
    "roomName":"Meze Odası-2",
    "color":"alarm-2"
  },
  {
    "id":3,
    "alarmTypeId":1,
    "name":"Kapı Açık",
    "time":"15:00",
    "roomName":"Meze Odası-3",
    "color":"alarm-1"
  },
  {
    "id":4,
    "alarmTypeId":4,
    "name":"Düşük Sıcalıklık",
    "time":"12:08",
    "roomName":"Meze Odası-4",
    "color":"alarm-3"
  },
  {
    "id":5,
    "alarmTypeId":1,
    "name":"Kapı Açık",
    "time":"11:05",
    "roomName":"Et Odası-1",
    "color":"alarm-1"
   
  },
  {
    "id":6,
    "alarmTypeId":3,
    "name":"Yüksek Sıcaklık",
    "time":"09:45",
    "roomName":"Et Odası-2",
    "color":"alarm-2"
  },
  {
    "id":7,
    "alarmTypeId":1,
    "name":"Kapı Açık",
    "time":"08:34",
    "roomName":"Et Odası-3",
    "color":"alarm-1"
  },
  {
    "id":8,
    "alarmTypeId":4,
    "name":"Düşük Sıcalıklık",
    "time":"07:56",
    "roomName":"Et Odası-4",
    "color":"alarm-3"
  },
  {
    "id":9,
    "alarmTypeId":1,
    "name":"Kapı Açık",
    "time":"12:05",
    "roomName":"meyve Odası-1",
    "color":"alarm-1"
   
  },
  {
    "id":10,
    "alarmTypeId":3,
    "name":"Yüksek Sıcaklık",
    "time":"06:57",
    "roomName":"Meyve Odası-2",
    "color":"alarm-2"
  },

  {
    "id":11,
    "alarmTypeId":4,
    "name":"Düşük Sıcalıklık",
    "time":"17:23",
    "roomName":"Meyve Odası-4",
    "color":"alarm-3"
  }    
]

@Injectable()
export class AlarmService {

  constructor(private http: HttpClient) { }

  fetchAlarmView():Observable<AlarmView[]>{
    return of(alarmView)
  }

  fetchAlarmCardSettings():Observable<AlarmCardSettings>{
    return of(settings)
  }
// TODO: getAlarmSettings
// TODO: getAlarmCardSettings
// TODO: getAlarms(now-1, now, top50)
}
