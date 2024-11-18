import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaMainComponent } from './sa-main.component';

describe('SaMainComponent', () => {
  let component: SaMainComponent;
  let fixture: ComponentFixture<SaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
