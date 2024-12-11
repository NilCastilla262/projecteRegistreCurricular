import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs'; // Importar correctamente throwError
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from './login.component';

let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let compiled: HTMLElement;

function getNthInput(index: number): HTMLInputElement {
  return compiled.querySelectorAll('input')[index] as HTMLInputElement;
}

describe('LoginComponent', () => {
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    // Crear un espía para AuthService
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, LoginComponent],
      providers: [{ provide: AuthService, useValue: authServiceSpy }], // Usar el espía
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('Button is disabled', () => {
    const button: HTMLButtonElement = compiled.querySelector('button')!;
    expect(button.disabled).toBeTruthy();
  });

  it('Enable button if all data is correct', () => {
    const inputEmail: HTMLInputElement = getNthInput(0);
    const inputPassword: HTMLInputElement = getNthInput(1);
    const button: HTMLButtonElement = compiled.querySelector('button')!;

    inputEmail.value = 'maria@gmail.com';
    inputPassword.value = 'Patata123';

    inputEmail.dispatchEvent(new Event('input'));
    inputPassword.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(button.disabled).toBeFalse();
  });

  it('should call login with correct credentials', () => {
    authServiceSpy.login.and.returnValue(of({ token: 'fake-token' })); // Mock exitoso

    component.email = 'maria@gmail.com';
    component.password = 'Patata123';

    fixture.detectChanges();
    const form: HTMLFormElement = compiled.querySelector('form')!;
    form.dispatchEvent(new Event('submit'));

    expect(authServiceSpy.login).toHaveBeenCalledWith('maria@gmail.com', 'Patata123');
  });

  it('should call login and store token on successful login', () => {
    authServiceSpy.login.and.returnValue(of({ token: 'fake-token' })); // Mock exitoso
    const inputEmail: HTMLInputElement = getNthInput(0);
    const inputPassword: HTMLInputElement = getNthInput(1);
    const button: HTMLButtonElement = compiled.querySelector('button')!;

    // Set user input
    inputEmail.value = 'maria@gmail.com';
    inputPassword.value = 'Patata123';
    inputEmail.dispatchEvent(new Event('input'));
    inputPassword.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Simulate form submission
    button.click();
    fixture.detectChanges();

    expect(authServiceSpy.login).toHaveBeenCalledWith('maria@gmail.com', 'Patata123');
    expect(localStorage.getItem('token')).toEqual('fake-token');
  });

  it('should handle login failure and show error message', () => {
    authServiceSpy.login.and.returnValue(throwError({ error: { message: 'Login failed' } })); // Mock fallo

    const inputEmail: HTMLInputElement = getNthInput(0);
    const inputPassword: HTMLInputElement = getNthInput(1);
    const button: HTMLButtonElement = compiled.querySelector('button')!;

    // Set user input
    inputEmail.value = 'maria@gmail.com';
    inputPassword.value = 'wrongpassword';
    inputEmail.dispatchEvent(new Event('input'));
    inputPassword.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Simulate form submission
    button.click();
    fixture.detectChanges();

    const errorMessage = compiled.querySelector('.error-message');
    expect(authServiceSpy.login).toHaveBeenCalledWith('maria@gmail.com', 'wrongpassword');
    expect(errorMessage?.textContent).toContain('Login failed');
  });

});
