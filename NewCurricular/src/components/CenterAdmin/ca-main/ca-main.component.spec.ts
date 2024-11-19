import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { CaMainComponent } from './ca-main.component';
import { By } from '@angular/platform-browser';

describe('CaMainComponent', () => {
  let component: CaMainComponent;
  let fixture: ComponentFixture<CaMainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          { path: 'ca-manage-sda', component: CaMainComponent },
          { path: 'ca-manage-users', component: CaMainComponent }
        ]),
        CaMainComponent // Afegim CaMainComponent aquí perquè és standalone
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CaMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to ca-manage-sda when the first button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith(['/ca-manage-sda']);
  });

  it('should navigate to ca-manage-users when the second button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith(['/ca-manage-users']);
  });
});
