import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ca-main',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './ca-main.component.html',
  styleUrls: ['./ca-main.component.css']
})
export class CaMainComponent {
  constructor(private router: Router) {}
  
}
