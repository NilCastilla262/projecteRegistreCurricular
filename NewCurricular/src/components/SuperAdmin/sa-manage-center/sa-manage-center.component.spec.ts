import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaManageCenterComponent } from './sa-manage-center.component';

describe('SaManageCenterComponent', () => {
  let component: SaManageCenterComponent;
  let fixture: ComponentFixture<SaManageCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaManageCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaManageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
