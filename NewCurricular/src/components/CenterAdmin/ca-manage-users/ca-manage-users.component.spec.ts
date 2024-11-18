import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaManageUsersComponent } from './ca-manage-users.component';

describe('CaManageUsersComponent', () => {
  let component: CaManageUsersComponent;
  let fixture: ComponentFixture<CaManageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaManageUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
