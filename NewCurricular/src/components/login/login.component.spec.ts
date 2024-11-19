import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password fields', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the email and password fields required', () => {
    const email = component.loginForm.get('email')!;
    email.setValue('');
    expect(email.valid).toBeFalsy();

    const password = component.loginForm.get('password')!;
    password.setValue('');
    expect(password.valid).toBeFalsy();
  });
  
  it('should call onSubmit when the form is submitted', () => {
  spyOn(component, 'onSubmit');
  component.loginForm.setValue({ email: 'test@example.com', password: 'password123' });
  fixture.detectChanges();
  // Simulate form submission
  const form = fixture.nativeElement.querySelector('form');
  form.dispatchEvent(new Event('submit'));
  expect(component.onSubmit).toHaveBeenCalled();
});

  
});