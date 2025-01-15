import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSdasComponent } from './list-sdas.component';

describe('ListSdasComponent', () => {
  let component: ListSdasComponent;
  let fixture: ComponentFixture<ListSdasComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSdasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListSdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render buttons with correct IDs and titles', () => {
    const mockData = [
      { UUID: 'btn-1', tittle: 'Title 1' },
      { UUID: 'btn-2', tittle: 'Title 2' },
      { UUID: 'btn-3', tittle: 'Title 3' },
    ];

    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(mockData.length); // Ensure the number of buttons matches the mock data

    // Iterate over mock data and validate each button
    mockData.forEach((item, index) => {
      const button = buttons[index];
      expect(button.id).toBe(item.UUID); // Check ID
      expect(button.textContent).toBe(item.tittle); // Check title
    });
  });
});
