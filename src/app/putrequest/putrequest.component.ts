import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-putrequest',
  templateUrl: './putrequest.component.html',
  styleUrls: ['./putrequest.component.css']
})
export class PutrequestComponent {

  constructor(private http: HttpClient) { }

  putRequest(tempA:any,humA:any,tempB:any,humB:any,tempExt:any,humExt:any){

    //let data="{"+"aTemp:"+tempA+","+"aHum:"+humA+","+"bTemp:"+tempB+","+"bHum:"+humB+","+"extTemp:"+tempExt+","+"extHum:"+humExt+"}";
    let data="{"+"aTemp:"+"16.70"+","+"aHum:"+97+","+"bTemp:"+"19.00"+","+"bHum:"+55+","+"extTemp:"+"22.20"+","+"extHum:"+39+"}";
      
    this.http.put<any>('http://localhost:4200/api/observation/905', { aTemp:0,aHum:0, bTemp:19.00,bHum:55, extTemp:22.20,extHum:39 } ).subscribe({
      error: error => {
      console.error('There was an error!', error);
  }});
  }
}
