import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaManageUsersComponent } from './sa-manage-users.component';

describe('SaManageUsersComponent', () => {
  let component: SaManageUsersComponent;
  let fixture: ComponentFixture<SaManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaManageUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
