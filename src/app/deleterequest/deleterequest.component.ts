import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleterequest',
  templateUrl: './deleterequest.component.html',
  styleUrls: ['./deleterequest.component.css']
})

export class DELETErequestComponent {
  constructor(private http: HttpClient) { }

  deleteRequest(url: any) {
    let URL: string;
    URL = url;
    this.http.delete(URL).subscribe(data => {
      console.log(data);
    });
  }
}
