import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Response {
  status: number;
  message: string;
  data: Observation[];
}

export interface Observation {
  id: number
  datetime: string;
  aTemp: number;
  aHum: number;
  bTemp: number;
  bHum: number;
  extTemp: number;
  extHum: number;
}

@Component({
  selector: 'app-getrequest',
  templateUrl: './getrequest.component.html',
  styleUrls: ['./getrequest.component.css']
})

export class GETrequestComponent {
  data!: Response;
  requestSent: boolean = false;
  hasData!: boolean;
  hasMessage!: boolean;
  columnsToDisplay: string[] = ['id', 'datetime', 'aTemp', 'aHum', 'bTemp', 'bHum', 'extTemp', 'extHum'];

  constructor(private http: HttpClient) { }

  renderTable() {
    this.hasData = true;
    this.hasMessage = false;
  }

  renderMessage() {
    this.hasMessage = true;
    this.hasData = false;
  }

  get(url: any) {
    this.http.get<Response>(url).subscribe(data => {
      this.data = data;
      this.requestSent = true;
      Array.isArray(this.data.data) ? this.renderTable() : this.renderMessage();
    });
  }
}
