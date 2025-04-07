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
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateDialogComponent} from './create-dialog/create-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as d3 from 'd3';
import {
  MatDialog,
} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,MatToolbarModule,ReactiveFormsModule,MatDialogModule,CreateDialogComponent,MatIconModule,FormsModule,HttpClientModule, BarChartComponent, NgxGraphModule,NetworkGraphComponent,MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'dashboard-frontend';
  public professorData: any;
  searchText: string = '';

    constructor(private apiService: ApiService,private dialog:MatDialog) {}


    onSearch(): void {
      if (this.searchText.trim()) {
        this.apiService.getData(this.searchText).subscribe(
          (response) => {
            this.professorData = response;
            console.log('Search results:', response);

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
onEdit(): void {
    console.log('Edit button clicked');

      }
    onCreate():void{


      }
openDialog():void{
  console.log("In dialog");
  this.dialog.open(CreateDialogComponent,{})
  }


  onDelete(): void {
      if (confirm('Are you sure you want to delete this professor?')) {
        this.apiService.deleteProfessor(this.searchText).subscribe(
          (response) => {
            console.log('Professor deleted successfully:', response);
            alert('Professor deleted successfully.');
            this.professorData = null;
          },
          (error) => {
            console.error('Error deleting professor:', error);
            alert('Failed to delete professor. Please try again.');
          }
        );
      }
    }
}
