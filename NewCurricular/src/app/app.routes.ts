import { Routes } from '@angular/router';
import { CaManageResumeComponent } from '../components/CenterAdmin/ca-manage-resume/ca-manage-resume.component';
import { MainAppComponent } from '../components/main-app/main-app.component';
import { PManageResumeComponent } from '../components/Professor/p-manage-resume/p-manage-resume.component';
import { PManageSdaComponent } from '../components/Professor/p-manage-sda/p-manage-sda.component';
import { CaManageSdaComponent } from '../components/CenterAdmin/ca-manage-sda/ca-manage-sda.component';
import { CaManageUsersComponent } from '../components/CenterAdmin/ca-manage-users/ca-manage-users.component';
import { SaManageUsersComponent } from '../components/SuperAdmin/sa-manage-users/sa-manage-users.component';
import { SaManageCurriculumComponent } from '../components/SuperAdmin/sa-manage-curriculum/sa-manage-curriculum.component';
import { SaManageCenterComponent } from '../components/SuperAdmin/sa-manage-center/sa-manage-center.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainAppComponent,
  },
  {
    path: 'camanage-resume',
    component: CaManageResumeComponent,
  },
  {
    path: 'pmanage-resume',
    component: PManageResumeComponent,
  },
  {
    path: 'pmanage-sda',
    component: PManageSdaComponent,
  },
  {
    path: 'camanage-sda',
    component: CaManageSdaComponent,
  },
  {
    path: 'camanage-users',
    component: CaManageUsersComponent,
  },
  {
    path: 'samanage-users',
    component: SaManageUsersComponent,
  },
  {
    path: 'samanage-curriculum',
    component: SaManageCurriculumComponent,
  },  {
    path: 'samanage-center',
    component: SaManageCenterComponent,
  }
];
