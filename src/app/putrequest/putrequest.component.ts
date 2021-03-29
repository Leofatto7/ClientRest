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
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

    //let data="{"+"aTemp:"+tempA+","+"aHum:"+humA+","+"bTemp:"+tempB+","+"bHum:"+humB+","+"extTemp:"+tempExt+","+"extHum:"+humExt+"}";
    let data="{"+"aTemp:"+"16.70"+","+"aHum:"+97+","+"bTemp:"+"19.00"+","+"bHum:"+55+","+"extTemp:"+"22.20"+","+"extHum:"+39+"}";
      
    this.http.put<any>('http://localhost:8000/observation/900', JSON.stringify({ aTemp:16.70,aHum:97, bTemp:19.00,bHum:55, extTemp:22.20,extHum:39 }), 
     { headers: headers } ).subscribe({
      error: error => {
      console.error('There was an error!', error);
  }});
  }
}
