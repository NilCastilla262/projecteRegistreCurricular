import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-main',
  standalone: true,
  templateUrl: './p-main.component.html',
  styleUrls: ['./p-main.component.css']
})
export class PMainComponent {
  constructor(private router: Router) {}

  navigateToManageSda() {
    this.router.navigate(['/manage-sda']);
  }
}
