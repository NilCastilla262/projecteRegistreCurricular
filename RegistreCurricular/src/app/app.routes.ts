import { Routes } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];
