import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sa-main',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './sa-main.component.html',
  styleUrls: ['./sa-main.component.css']
})
export class SaMainComponent {
  constructor(private router: Router) {}

}