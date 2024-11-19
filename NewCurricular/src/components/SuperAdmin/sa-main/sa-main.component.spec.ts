import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { SaMainComponent } from './sa-main.component';
import { By } from '@angular/platform-browser';

describe('SaMainComponent', () => {
  let component: SaMainComponent;
  let fixture: ComponentFixture<SaMainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          { path: 'manage-center', component: SaMainComponent },
          { path: 'manage-users', component: SaMainComponent },
          { path: 'manage-curriculum', component: SaMainComponent }
        ]),
        SaMainComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SaMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to manage-center when the first button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    button.triggerEventHandler('click', null);

    expect(navigateSpy).toHaveBeenCalledWith(['/manage-center']);
  });
});
