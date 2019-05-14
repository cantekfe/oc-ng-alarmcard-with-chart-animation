import { Component, OnInit } from '@angular/core';
import { AlarmService } from '../../alarm.service'
import { AlarmCardSettings } from '../../model'

@Component({
  selector: 'alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.css']
})
export class AlarmSettingsComponent implements OnInit {

  settingsData:AlarmCardSettings;
  constructor(private _service: AlarmService) { }

  ngOnInit() {
    this.fetchSettings();
  }

  fetchSettings() {
    this._service.fetchAlarmCardSettings().subscribe(
      (result:AlarmCardSettings):void =>{
        console.info(result)
      this.settingsData = result;
      
    })
  }
}
