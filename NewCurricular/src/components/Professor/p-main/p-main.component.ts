import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-p-main',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './p-main.component.html',
  styleUrls: ['./p-main.component.css']
})
export class PMainComponent {
  constructor(private router: Router) {}
  
}
