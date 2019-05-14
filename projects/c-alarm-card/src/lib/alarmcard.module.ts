import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AlarmService } from './alarm-widget/alarm.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatButtonModule,MatSelectModule, MatIconModule} from '@angular/material';

import { AlarmCardComponent } from './alarm-widget/alarm-card/alarm-card.component';
import { AlarmViewComponent } from './alarm-widget/alarm-card/alarm-view/alarm-view.component';
import { AlarmSettingsComponent } from './alarm-widget/alarm-card/alarm-settings/alarm-settings.component';
import {AlarmWidgetComponent} from './alarm-widget/alarm-widget.component';
@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    NgxChartsModule
  ],
  declarations: [
    AlarmViewComponent,
    AlarmSettingsComponent,
    AlarmCardComponent,
    AlarmWidgetComponent
  ],
  providers: [AlarmService],
  exports: [AlarmCardComponent]
})
export class AlarmCardModule { }
