import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';  

@NgModule({
  declarations: [
    LoginComponent  // Declare LoginComponent here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Import ReactiveFormsModule here
  ],
  providers: [],
})
export class AppModule { }
