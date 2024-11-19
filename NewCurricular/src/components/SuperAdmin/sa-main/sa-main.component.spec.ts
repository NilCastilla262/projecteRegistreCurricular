import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { SaMainComponent } from './sa-main.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { routes } from '../../../app/app.routes';

describe('SaMainComponent', () => {
  let component: SaMainComponent;
  let fixture: ComponentFixture<SaMainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes), 
        SaMainComponent 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SaMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should navigate to /samanage-center when the first button is clicked', async () => {
    fixture.detectChanges();

    const linkDebugs = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[0].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(router.url).toBe('/samanage-center');
  });

  it('should navigate to /samanage-users when the second button is clicked', async () => {
    fixture.detectChanges();

    const linkDebugs = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[1].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(router.url).toBe('/samanage-users');
  });

  it('should navigate to /samanage-curriculum when the third button is clicked', async () => {
    fixture.detectChanges();

    const linkDebugs = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[2].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(router.url).toBe('/samanage-curriculum');
  });
});
