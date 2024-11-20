import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSdaComponent } from './create-sda.component';
import { By } from '@angular/platform-browser';
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
    const checkboxes = fixture.debugElement.queryAll(By.css('input[type="checkbox"]'));
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
      const checkbox = fixture.debugElement.query(By.css(`input[type="checkbox"][value="${value}"]`));
      expect(checkbox).toBeTruthy();
    });
  });
  it('should disable the button if no data in any field of the form', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.disabled).toBeTrue();
  
    // Omple el camp de títol
    const inputTitle = fixture.debugElement.query(By.css('input[placeholder="Títol de la SDA"]'));
    inputTitle.nativeElement.value = 'Títol de prova';
    inputTitle.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Omple el camp de descripció
    const inputDescription = fixture.debugElement.query(By.css('input[placeholder="Descripció de la SDA"]'));
    inputDescription.nativeElement.value = 'Descripció de prova';
    inputDescription.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Omple el camp de data d'inici
    const inputStartDate = fixture.debugElement.query(By.css('input[type="date"]#startDate'));
    inputStartDate.nativeElement.value = '2024-01-01';
    inputStartDate.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Omple el camp de data de fi
    const inputEndDate = fixture.debugElement.query(By.css('input[type="date"]#endDate'));
    inputEndDate.nativeElement.value = '2024-01-31';
    inputEndDate.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // Marca un checkbox
    const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]'));
    checkbox.nativeElement.checked = true;
    checkbox.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  
    expect(button.nativeElement.disabled).toBeFalse();
  });  
});