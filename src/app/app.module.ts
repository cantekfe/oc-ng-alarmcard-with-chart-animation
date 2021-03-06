import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatButtonModule,MatSelectModule, MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {AlarmCardModule} from '../../projects/c-alarm-card/src/lib/alarmcard.module';
@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    NgxChartsModule,
    AlarmCardModule
  ],
  declarations: [
    AppComponent,
    HelloComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
