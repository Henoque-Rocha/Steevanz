import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'steevanz';
  constructor (private http: HttpClient) {}

  ngOnInit():void {
    this.getApi();
  }

 apiUrl = 'https://restcountries.com/v3.1/all'; 

  public getApi() {
    this.http.get(`${this.apiUrl}`).subscribe((response) => {
      console.log(response);
    });
  }
}