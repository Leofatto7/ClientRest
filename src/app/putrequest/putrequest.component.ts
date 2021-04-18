import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConstantsService } from '../common/services/constants.service';

@Component({
  selector: 'app-putrequest',
  templateUrl: './putrequest.component.html',
  styleUrls: ['./putrequest.component.css']
})
export class PutrequestComponent {
  apiURL: string;

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.apiURL = constants.API_URL + '/observation/';
  }

  put(id: string, aTemp: string, aHum: string, bTemp: string, bHum: string, extTemp: string, extHum: string) {
    this.http.put<any>(this.apiURL + id, {
      aTemp: aTemp ? aTemp : null,
      aHum: aHum ? aHum : null,
      bTemp: bTemp ? bTemp : null,
      bHum: bHum ? bHum : null,
      extTemp: extTemp ? extTemp : null,
      extHum: extHum ? extHum : null
    }).subscribe();
  }
}
