import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { PMainComponent } from './p-main.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { routes } from '../../../app/app.routes';
import { DebugElement } from '@angular/core';

describe('PMainComponent', () => {
  let component: PMainComponent;
  let fixture: ComponentFixture<PMainComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        PMainComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PMainComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('Navigates to /pmanage-sda option', async () => {
    fixture.detectChanges();
    const linkDebugs: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[0].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/pmanage-sda');
  });

  it('Navigates to /pmanage-resume option', async () => {
    fixture.detectChanges();
    const linkDebugs: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    const link: HTMLAnchorElement = linkDebugs[1].nativeElement as HTMLAnchorElement;

    link.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(router.url).toBe('/pmanage-resume');
  });
});
