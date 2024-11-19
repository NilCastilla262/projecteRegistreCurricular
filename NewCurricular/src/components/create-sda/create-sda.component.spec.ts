import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSdaComponent } from './create-sda.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('CreateSdaComponent', () => {
  let component: CreateSdaComponent;
  let fixture: ComponentFixture<CreateSdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSdaComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the form to create an SDA should have all necessary elements', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toBe('Crear SDA');

    const inputTitle = fixture.debugElement.query(By.css('input[placeholder="Títol de la SDA"]'));
    expect(inputTitle).toBeTruthy();

    const inputDescription = fixture.debugElement.query(By.css('input[placeholder="Descripció de la SDA"]'));
    expect(inputDescription).toBeTruthy();

    const inputStartDate = fixture.debugElement.query(By.css('input[type="date"][placeholder="Data Inici"]'));
    expect(inputStartDate).toBeTruthy();

    const inputEndDate = fixture.debugElement.query(By.css('input[type="date"][placeholder="Data Fi"]'));
    expect(inputEndDate).toBeTruthy();

    const sectionTitle = fixture.debugElement.query(By.css('h2'));
    expect(sectionTitle.nativeElement.textContent).toBe('Que es treballarà en la SDA');

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
