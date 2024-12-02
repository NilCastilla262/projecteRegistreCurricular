import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSdaComponent } from './create-sda.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

describe('CreateSdaComponent', () => {
  let component: CreateSdaComponent;
  let fixture: ComponentFixture<CreateSdaComponent>;
  let nativeElement: HTMLElement;

  // Helper per omplir el formulari
  const fillForm = (title: string, description: string, startDate: string, endDate: string, checkSubject = true) => {
    const inputTitle = nativeElement.querySelector('input[placeholder="Títol de la SDA"]') as HTMLInputElement;
    inputTitle.value = title;
    inputTitle.dispatchEvent(new Event('input'));

    const inputDescription = nativeElement.querySelector('input[placeholder="Descripció de la SDA"]') as HTMLInputElement;
    inputDescription.value = description;
    inputDescription.dispatchEvent(new Event('input'));

    const inputStartDate = nativeElement.querySelector('input[type="date"]#startDate') as HTMLInputElement;
    inputStartDate.value = startDate;
    inputStartDate.dispatchEvent(new Event('input'));

    const inputEndDate = nativeElement.querySelector('input[type="date"]#endDate') as HTMLInputElement;
    inputEndDate.value = endDate;
    inputEndDate.dispatchEvent(new Event('input'));

    if (checkSubject) {
      const checkbox = nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change'));
    }

    fixture.detectChanges();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreateSdaComponent,
        RouterModule.forRoot([]),
        FormsModule,
        NgFor
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSdaComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  describe('Checkbox group for subjects', () => {
    it('should have all the checkboxes for subjects', () => {
      const checkboxes = nativeElement.querySelectorAll('input[type="checkbox"]');
      expect(checkboxes.length).toBe(11);

      const expectedCheckboxValues = [
        'Llengua catalana i castellana',
        'Llengua estrangera, 1a',
        'Matemàtiques',
        'Coneixement del medi natural, social i cultural',
        'Educació Artística',
        'Educació Física',
        'Educació en valors cívics i ètics',
        'Competència ciutadana (CC)',
        'Competència emprenedora (CE)',
        'Competència digital (CD)',
        'Competència personal, social i d\'apendre a aprendre (CPSAA)'
      ];

      expectedCheckboxValues.forEach(value => {
        const checkbox = nativeElement.querySelector(`input[type="checkbox"][value="${value}"]`);
        expect(checkbox).toBeTruthy();
      });
    });
  });

  describe('Button behavior', () => {
    let button: HTMLButtonElement;

    beforeEach(() => {
      button = nativeElement.querySelector('button') as HTMLButtonElement;
    });

    it('should disable the button if no data in any field of the form', () => {
      expect(button.disabled).toBeTrue();

      // Omple un sol camp i comprova que segueix deshabilitat
      const inputTitle = nativeElement.querySelector('input[placeholder="Títol de la SDA"]') as HTMLInputElement;
      inputTitle.value = 'Títol de prova';
      inputTitle.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(button.disabled).toBeTrue();
    });

    it('should enable the button when the form is fully filled', () => {
      fillForm('Títol de prova', 'Descripció de prova', '2024-01-01', '2024-01-31');
      expect(button.disabled).toBeFalse();
    });

    it('should disable the button after creating an SDA', () => {
      spyOn(component, 'createSda').and.callThrough();

      fillForm('Títol de prova', 'Descripció de prova', '2024-01-01', '2024-01-31');
      expect(button.disabled).toBeFalse();

      button.click();
      fixture.detectChanges();

      expect(component.sdaCreated).toBeTrue();
      expect(button.disabled).toBeTrue();
    });
  });

  describe('Create SDA functionality', () => {
    it('should call the createSda function and display the success message on successful creation', () => {
      spyOn(component, 'createSda').and.callThrough();

      fillForm('Títol de prova', 'Descripció de prova', '2024-01-01', '2024-01-31');

      const button = nativeElement.querySelector('button') as HTMLButtonElement;
      button.click();
      fixture.detectChanges();

      expect(component.createSda).toHaveBeenCalled();
      expect(component.sdaCreated).toBeTrue();

      const successMessage = nativeElement.querySelector('p');
      expect(successMessage?.textContent).toContain('SDA Creat correctament');
    });

    it('should display an error message when the button click fails', () => {
      spyOn(component, 'performCreateSda').and.returnValue(false);

      fillForm('Títol de prova', 'Descripció de prova', '2024-01-01', '2024-01-31');

      const button = nativeElement.querySelector('button') as HTMLButtonElement;
      button.click();
      fixture.detectChanges();

      expect(component.sdaCreated).toBeFalse();

      const errorMessage = nativeElement.querySelector('p');
      expect(errorMessage?.textContent).toContain('Error al crear l\'SDA');
    });
  });
});
