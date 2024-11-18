import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaManageResumeComponent } from './ca-manage-resume.component';

describe('CaManageResumeComponent', () => {
  let component: CaManageResumeComponent;
  let fixture: ComponentFixture<CaManageResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaManageResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaManageResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
