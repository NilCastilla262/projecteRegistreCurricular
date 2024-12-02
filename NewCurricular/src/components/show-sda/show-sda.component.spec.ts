import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowSdaComponent } from './show-sda.component'; // Standalone component
import { HttpClientTestingModule } from '@angular/common/http/testing'; // If HttpClient is used

describe('ShowSdaComponent', () => {
  let component: ShowSdaComponent;
  let fixture: ComponentFixture<ShowSdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSdaComponent, HttpClientTestingModule], // Import the standalone component here
    }).compileComponents();

    fixture = TestBed.createComponent(ShowSdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the competency hierarchy correctly', () => {
    // Mock JSON data
    const mockCompetencyTypes = [
      {
        UUID: 'F1D28FEB-9507-4CA1-875D-DA9A995C76D1',
        Description: 'COMPETÈNCIES ESPECÍFIQUES',
      },
    ];

    const mockCompetencyNames = [
      {
        UUID: 'F368AA61-9781-4632-8DC3-24792C2266F0',
        UUID_CompetencyType: 'F1D28FEB-9507-4CA1-875D-DA9A995C76D1',
        Description: 'Llengua estrangera, 1a',
      },
    ];

    const mockCompetencyDescriptions = [
      {
        UUID: '044DD590-4B57-439D-9DAF-08B73F86D77D',
        UUID_CompetencyName: 'F368AA61-9781-4632-8DC3-24792C2266F0',
        Descripcion: 'Comprendre la diversitat lingüística i cultural...',
      },
    ];

    // Set component data
    component.competencyTypesList = mockCompetencyTypes;
    component.competencyNamesList = mockCompetencyNames;
    component.competencyDescriptionList = mockCompetencyDescriptions;

    // Trigger change detection
    fixture.detectChanges();

    // Check competency type headers
    const compiled = fixture.nativeElement as HTMLElement;

    const headers = compiled.querySelectorAll('h1');
    expect(headers.length).toBe(mockCompetencyTypes.length);
    mockCompetencyTypes.forEach((type, index) => {
      expect(headers[index].textContent).toContain(type.Description);
    });

    // Check competency names under each type
    const names = compiled.querySelectorAll('h3');
    expect(names.length).toBe(mockCompetencyNames.length);
    mockCompetencyNames.forEach((name, index) => {
      expect(names[index].textContent).toContain(name.Description);
    });

    // Check competency descriptions under each name
    const descriptions = compiled.querySelectorAll('p');
    expect(descriptions.length).toBe(mockCompetencyDescriptions.length);
    mockCompetencyDescriptions.forEach((description, index) => {
      expect(descriptions[index].textContent).toContain(
        description.Descripcion
      );
    });
  });
});
