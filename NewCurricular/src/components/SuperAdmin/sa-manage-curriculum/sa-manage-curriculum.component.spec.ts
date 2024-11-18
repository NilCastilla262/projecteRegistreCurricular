import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaManageCurriculumComponent } from './sa-manage-curriculum.component';

describe('SaManageCurriculumComponent', () => {
  let component: SaManageCurriculumComponent;
  let fixture: ComponentFixture<SaManageCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaManageCurriculumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaManageCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
