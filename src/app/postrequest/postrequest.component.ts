import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-postrequest',
  templateUrl: './postrequest.component.html',
  styleUrls: ['./postrequest.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})

export class POSTrequestComponent {
  apiURL: string;

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.apiURL = constants.API_URL + '/observation/new';
  }

  post(date: string, time:string, aTemp: string, aHum: string, bTemp: string, bHum: string, extTemp: string, extHum: string) {
    this.http.post<any>(this.apiURL, {
      datetime: moment(date + ' ' + time, 'DD/MM/yyyy HH:mm').format('yyyy-MM-DD HH:mm:ss'),
      aTemp: aTemp ? aTemp : null,
      aHum: aHum ? aHum : null,
      bTemp: bTemp ? bTemp : null,
      bHum: bHum ? bHum : null,
      extTemp: extTemp ? extTemp : null,
      extHum: extHum ? extHum : null
    }).subscribe();
  }
}
