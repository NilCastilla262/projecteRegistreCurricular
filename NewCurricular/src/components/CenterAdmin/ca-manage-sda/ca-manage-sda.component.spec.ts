import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaManageSdaComponent } from './ca-manage-sda.component';

describe('CaManageSdaComponent', () => {
  let component: CaManageSdaComponent;
  let fixture: ComponentFixture<CaManageSdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaManageSdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaManageSdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
