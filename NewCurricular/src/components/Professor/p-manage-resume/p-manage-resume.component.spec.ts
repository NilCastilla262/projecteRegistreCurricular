import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PManageResumeComponent } from './p-manage-resume.component';

describe('PManageResumeComponent', () => {
  let component: PManageResumeComponent;
  let fixture: ComponentFixture<PManageResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PManageResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PManageResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
