import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCenterFormComponent } from './create-center-form.component';

describe('CreateCenterFormComponent', () => {
  let component: CreateCenterFormComponent;
  let fixture: ComponentFixture<CreateCenterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCenterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
