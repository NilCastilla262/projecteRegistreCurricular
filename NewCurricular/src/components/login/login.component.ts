import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private authService: AuthService) {}

    login() {
        this.authService.login(this.email, this.password).subscribe(
            (response) => {
                console.log('Login successful:', response);
                localStorage.setItem('token', response.token); 
            },
            (error) => {
                console.error('Login failed:', error);
            }
        );
    }
  isFormValid(): boolean {
    return this.email.trim() !== '' && this.password.trim() !== '';
  }
}
