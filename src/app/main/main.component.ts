import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

interface UserResponce {
  login: string;
  bio: string;
  company: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  request;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<UserResponce>('https://api.github.com/users/seeschweiler').subscribe(
      (data) => {
        console.log('User Login: ' + data.login);
        console.log('Bio: ' + data.bio);
        console.log('Company: ' + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client side error occured');
        } else {
          console.log('Server side error ocured');
        }
      }
    );
    this.request = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'bingo',
      body: 'bar',
      userId: 3
    }).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
