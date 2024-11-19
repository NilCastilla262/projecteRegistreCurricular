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
});
