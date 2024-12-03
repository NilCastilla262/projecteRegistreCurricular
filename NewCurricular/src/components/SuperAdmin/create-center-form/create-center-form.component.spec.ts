import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCenterFormComponent } from './create-center-form.component';

describe('CreateCenterFormComponent', () => {
  let component: CreateCenterFormComponent;
  let fixture: ComponentFixture<CreateCenterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreateCenterFormComponent,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable the button if no data in any field of the form', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.disabled).toBeTrue();

    const inputName = fixture.nativeElement.querySelector('input#centerName');
    inputName.value = 'Nom Prova';
    inputName.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(button.disabled).toBeTrue();

    const inputEmail = fixture.nativeElement.querySelector('input#adminEmail');
    inputEmail.value = 'admin@prova.com';
    inputEmail.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(button.disabled).toBeTrue();

    const selectMunicipality = fixture.nativeElement.querySelector('select#municipality');
    selectMunicipality.value = component.municipalities[0];
    selectMunicipality.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(button.disabled).toBeFalse();
  });
});
