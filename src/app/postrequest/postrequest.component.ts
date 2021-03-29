import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


interface Post{
  datetime: string;
  aTemp: string;
  aHum: number;
  bTemp: string;
  bHum: number;
  extTemp: string;
  extHum: number;
}

@Component({
  selector: 'app-postrequest',
  templateUrl: './postrequest.component.html',
  styleUrls: ['./postrequest.component.css']
})
export class POSTrequestComponent {
  
  constructor(private http: HttpClient) { }

  postRequest(datetime:any,tempA:any,humA:any,tempB:any,humB:any,tempExt:any,humExt:any){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

    //let data="{datetime:"+datetime+","+"aTemp:"+tempA+","+"aHum:"+humA+","+"bTemp:"+tempB+","+"bHum:"+humB+","+"extTemp:"+tempExt+","+"extHum:"+humExt+"}";
    let data="{datetime:"+"2022-01-01 18:00:00"+","+"aTemp:"+"16.70"+","+"aHum:"+97+","+"bTemp:"+"19.00"+","+"bHum:"+55+","+"extTemp:"+"22.20"+","+"extHum:"+39+"}";
      
    this.http.post<any>('http://localhost:8000/observation/create', { datetime:'2022-01-01 18:00:00', aTemp:'16.70',aHum:97, bTemp:'19.00',bHum:55, extTemp:'22.20',extHum:39 }, 
     { headers: headers } ).subscribe({
      error: error => {
      console.error('There was an error!', error);
  }});
  }

}
