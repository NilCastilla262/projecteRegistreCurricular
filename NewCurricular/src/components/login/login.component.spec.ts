import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled: HTMLElement;
function getNthInput(index:number) {
  return compiled.querySelectorAll("input")[index];
}

function getInputFromDiv(inputIndex:number) {
  return getNthInput(inputIndex)!.querySelector("input");
}
describe('LoginComponent', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled=fixture.nativeElement as HTMLElement;
  });


  it('Button is disabled', () => {
    expect(compiled.querySelector("button")!.disabled).toBeTruthy();
  });

  it('Enable button if all data is correct', () => {
    
    const inputEmail:HTMLInputElement = getInputFromDiv(0)!;
    const inputPassword:HTMLInputElement = getInputFromDiv(1)!;
    const button:HTMLButtonElement = compiled.querySelector("button")!;

    
    inputEmail.value="maria@gmail.com";
    inputPassword.value="Patata123";

    

    
    inputEmail.dispatchEvent(new Event("input"));
    inputPassword.dispatchEvent(new Event("input"));

    fixture.detectChanges();
    expect(button.disabled).toBeFalse();

  })
});
