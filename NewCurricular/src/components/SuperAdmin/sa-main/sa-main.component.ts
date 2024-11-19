import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sa-main',
  standalone: true,
  templateUrl: './sa-main.component.html',
  styleUrls: ['./sa-main.component.css']
})
export class SaMainComponent {
  constructor(private router: Router) {}

  navigateToManageCenter() {
    this.router.navigate(['/manage-center']);
  }
  navigateToManageUsers() {
    this.router.navigate(['/manage-users']);
  }
}