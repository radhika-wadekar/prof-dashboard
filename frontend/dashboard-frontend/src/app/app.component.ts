import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ApiService } from './api.service';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NetworkGraphComponent } from './network-graph/network-graph.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import * as d3 from 'd3';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,MatToolbarModule,FormsModule,HttpClientModule, BarChartComponent, NgxGraphModule,NetworkGraphComponent,MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'dashboard-frontend';
  public professorData: any;
  searchText: string = '';

    constructor(private apiService: ApiService) {}


    onSearch(): void {
      if (this.searchText.trim()) {
        this.apiService.getData(this.searchText).subscribe( // Pass searchText here
          (response) => {
            this.professorData = response;
            console.log('Search results:', response);
            // Handle response here (e.g., update UI with data)
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
      }
    }


  ngOnInit(): void {

    this.apiService.getData(this.searchText).subscribe(
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
