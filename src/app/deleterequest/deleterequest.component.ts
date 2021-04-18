import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { ConstantsService } from '../common/services/constants.service';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-deleterequest',
  templateUrl: './deleterequest.component.html',
  styleUrls: ['./deleterequest.component.css'],
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

export class DELETErequestComponent {
  apiURL: string;

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.apiURL = constants.API_URL + '/observation/';
  }

  delete(id: string | null, date: string | null, time: string | null) {
    if (id !== null) {
      this.http.delete(this.apiURL + id).subscribe();
    } else if (date !== null && time !== null) {
      let params: HttpParams = new HttpParams();
      params = params.set('datetime', moment(date + ' ' + time, 'DD/MM/yyyy HH:mm').format('yyyy-MM-DD HH:mm:ss'))
      this.http.delete(this.apiURL, { params: params }).subscribe();
    }
  }
}
