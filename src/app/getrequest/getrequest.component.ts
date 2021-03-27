import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-getrequest',
  templateUrl: './getrequest.component.html',
  styleUrls: ['./getrequest.component.css']
})
export class GETrequestComponent {
  data: Observable<any> | undefined;
  constructor(private http: HttpClient){}

  getRequest(url:any){
    let URL: string;
    URL= url;
    this.data=this.http.get(URL);
  }

  mostra(){
    document.getElementsByTagName("table")[0].removeAttribute("hidden");
  }

}
