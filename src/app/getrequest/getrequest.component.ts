import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { plainToClass, plainToClassFromExist } from 'class-transformer';

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
  //data!: Response;
  data: Observable<any> | undefined;
  constructor(private http: HttpClient) { }

  getRequest(url: any) {
    let URL: string;
    URL = url;
    //this.http.get<Response>(URL).subscribe(data => {
    //  this.data = data;
    //  console.log(this.data);
    //});
    this.data = this.http.get(URL);
  }

  mostra() {
    document.getElementsByTagName("table")[0].removeAttribute("hidden");
  }

}
