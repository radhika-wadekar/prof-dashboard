import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,MatToolbarModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'dashboard-frontend';
  public professorData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getData().subscribe(
      (data) => {
        this.professorData = data;
        console.log('API Data:', this.professorData);
      },
      (error) => {
        console.error('Error fetching data from API', error);
      }
    );
  }
}
