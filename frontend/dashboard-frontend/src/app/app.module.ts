import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Adjust path as needed
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule here

@NgModule({
  declarations: [
    AppComponent ]
  ,
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
