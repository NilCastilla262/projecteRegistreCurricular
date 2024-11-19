import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { CaMainComponent } from './ca-main.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { routes } from '../../../app/app.routes';
import { DebugElement } from '@angular/core';

describe('CaMainComponent', () => {
  let component: CaMainComponent;
  let fixture: ComponentFixture<CaMainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        CaMainComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CaMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Navigates to /camanage-sda option', async () => {
    fixture.detectChanges();
    const linkDebugs: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[0].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/camanage-sda');
  });

  it('Navigates to /camanage-users option', async () => {
    fixture.detectChanges();
    const linkDebugs: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[1].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/camanage-users');
  });

  it('Navigates to /camanage-resume option', async () => {
    fixture.detectChanges();
    const linkDebugs: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[2].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/camanage-resume');
  });
});
