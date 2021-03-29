import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  readonly ROOT_URL= 'https://jsonplaceholder.typicode.com/posts';

  /*
  createData(){
    const data: Post ={
      id: 0,
      userId: 23,
      title: 'My New Post',
      body: ' Hello World!'
    }

    this.newData = this.http.post<Post>(this.ROOT_URL+'/posts', data);
  }*/
}


    
