import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
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
  beforeEach(async () => {
    const mockAuthService = {
      login: jasmine.createSpy('login').and.returnValue(of({ token: 'fake-token' })),
    };

    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, LoginComponent],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
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
    const authService = TestBed.inject(AuthService);
    component.email = 'maria@gmail.com';
    component.password = 'Patata123';

    fixture.detectChanges();
    const form: HTMLFormElement = compiled.querySelector('form')!;
    form.dispatchEvent(new Event('submit'));

    expect(authService.login).toHaveBeenCalledWith('maria@gmail.com', 'Patata123');
  });

  it('should show a message when no data is provided', () => {
    const button: HTMLButtonElement = compiled.querySelector('button')!;
    const message: HTMLParagraphElement = compiled.querySelector('p')!;

    button.click();
    fixture.detectChanges();
    expect(message.textContent).toContain('No has introduït les dades');

    component.email = 'maria@gmail.com';
    component.password = 'Patata123';
    fixture.detectChanges();
    expect(message.textContent).toBeFalsy();
  });
});
