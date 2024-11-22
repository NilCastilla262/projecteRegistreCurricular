import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSdaComponent } from './create-sda.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

describe('CreateSdaComponent', () => {
  let component: CreateSdaComponent;
  let fixture: ComponentFixture<CreateSdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateSdaComponent,
        RouterModule.forRoot([]),
        FormsModule,
        NgFor
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSdaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    await fixture.whenStable(); 
    fixture.detectChanges(); 
  });

  it('should have all the checkboxes for subjects', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
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
      const checkbox = document.querySelector(`input[type="checkbox"][value="${value}"]`);
      expect(checkbox).toBeTruthy();
    });
  });

  it('should disable the button if no data in any field of the form', () => {
    const button = document.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.getAttribute('disabled')).toBeDefined();
  
    // Omple el camp de títol
    const inputTitle = document.querySelector('input[placeholder="Títol de la SDA"]') as HTMLInputElement;
    inputTitle.value = 'Títol de prova';
    inputTitle.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Omple el camp de descripció
    const inputDescription = document.querySelector('input[placeholder="Descripció de la SDA"]') as HTMLInputElement;
    inputDescription.value = 'Descripció de prova';
    inputDescription.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Omple el camp de data d'inici
    const inputStartDate = document.querySelector('input[type="date"]#startDate') as HTMLInputElement;
    inputStartDate.value = '2024-01-01';
    inputStartDate.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Omple el camp de data de fi
    const inputEndDate = document.querySelector('input[type="date"]#endDate') as HTMLInputElement;
    inputEndDate.value = '2024-01-31';
    inputEndDate.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Marca un checkbox
    const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  
    expect(button?.getAttribute('disabled')).toBeNull();
  });

  it('should call the createSda function, return true, and display the success message when the button is clicked', () => {
    spyOn(component, 'createSda').and.callThrough(); // Espia la funció
  
    // Omplim tots els camps del formulari
    const inputTitle = document.querySelector('input[placeholder="Títol de la SDA"]') as HTMLInputElement;
    inputTitle.value = 'Títol de prova';
    inputTitle.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    const inputDescription = document.querySelector('input[placeholder="Descripció de la SDA"]') as HTMLInputElement;
    inputDescription.value = 'Descripció de prova';
    inputDescription.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    const inputStartDate = document.querySelector('input[type="date"]#startDate') as HTMLInputElement;
    inputStartDate.value = '2024-01-01';
    inputStartDate.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    const inputEndDate = document.querySelector('input[type="date"]#endDate') as HTMLInputElement;
    inputEndDate.value = '2024-01-31';
    inputEndDate.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  
    const button = document.querySelector('button') as HTMLButtonElement;
    expect(button).toBeTruthy();
    expect(button.disabled).toBeFalse();
    
    expect(component.sdaCreated).toBeFalsy();
  
    button.click();
    fixture.detectChanges();
  
    expect(component.createSda).toHaveBeenCalled();
    expect(component.sdaCreated).toBeTrue();
  
    const successMessage = document.querySelector('p');
    expect(successMessage).toBeTruthy();
    expect(successMessage?.textContent).toContain('SDA Creat correctament');
  });
});