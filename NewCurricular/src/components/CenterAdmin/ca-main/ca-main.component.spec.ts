import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaMainComponent } from './ca-main.component';

describe('CaMainComponent', () => {
  let component: CaMainComponent;
  let fixture: ComponentFixture<CaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
