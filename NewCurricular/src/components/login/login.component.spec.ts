import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

let component: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let compiled: HTMLElement;

function getNthInput(index: number): HTMLInputElement {
  return compiled.querySelectorAll('input')[index] as HTMLInputElement;
}

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Include FormsModule
      declarations: [LoginComponent], // Declare LoginComponent
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('Button is disabled', () => {
    const button: HTMLButtonElement = compiled.querySelector('button')!;
    expect(button.disabled).toBeTruthy(); // Ensure the button is initially disabled
  });

  it('Enable button if all data is correct', () => {
    const inputEmail: HTMLInputElement = getNthInput(0);
    const inputPassword: HTMLInputElement = getNthInput(1);
    const button: HTMLButtonElement = compiled.querySelector('button')!;

    // Simulate user input
    inputEmail.value = 'maria@gmail.com';
    inputPassword.value = 'Patata123';

    // Dispatch input events
    inputEmail.dispatchEvent(new Event('input'));
    inputPassword.dispatchEvent(new Event('input'));

    // Trigger change detection
    fixture.detectChanges();

    // Assert the button is enabled
    expect(button.disabled).toBeFalse();
  });
  
  it('should call login with correct credentials', () => {
    const authServiceSpy = spyOn(component['authService'], 'login').and.callThrough();
  
    component.email = 'maria@gmail.com';
    component.password = 'Patata123';
  
    fixture.detectChanges();
    const form: HTMLFormElement = compiled.querySelector('form')!;
    form.dispatchEvent(new Event('submit'));
  
    expect(authServiceSpy).toHaveBeenCalledWith('maria@gmail.com', 'Patata123');
  });
});
