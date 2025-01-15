import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSdasComponent } from './list-sdas.component';

describe('ListSdasComponent', () => {
  let component: ListSdasComponent;
  let fixture: ComponentFixture<ListSdasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSdasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
