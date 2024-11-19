import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { PMainComponent } from './p-main.component';
import { By } from '@angular/platform-browser';

describe('PMainComponent', () => {
  let component: PMainComponent;
  let fixture: ComponentFixture<PMainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          { path: 'manage-sda', component: PMainComponent }
        ]),
        PMainComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to manage-sda when the first button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith(['/manage-sda']);
  });


  it('should navigate to manage-resume when the second button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith(['/manage-resume']);
  });
});
