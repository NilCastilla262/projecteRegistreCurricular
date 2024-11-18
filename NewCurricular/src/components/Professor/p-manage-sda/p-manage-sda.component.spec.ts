import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PManageSdaComponent } from './p-manage-sda.component';

describe('PManageSdaComponent', () => {
  let component: PManageSdaComponent;
  let fixture: ComponentFixture<PManageSdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PManageSdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PManageSdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
