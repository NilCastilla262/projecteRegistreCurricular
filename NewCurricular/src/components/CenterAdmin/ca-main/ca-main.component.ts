import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ca-main',
  standalone: true,
  templateUrl: './ca-main.component.html',
  styleUrls: ['./ca-main.component.css']
})
export class CaMainComponent {
  constructor(private router: Router) {}

  navigateToManageSda() {
    this.router.navigate(['/ca-manage-sda']);
  }

  navigateToManageUsers() {
    this.router.navigate(['/ca-manage-users']);
  }
  navigateToManageResume() {
    this.router.navigate(['/ca-manage-resume']);
  }
}
