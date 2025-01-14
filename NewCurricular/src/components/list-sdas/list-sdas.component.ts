import { Component, inject } from '@angular/core';
import { SdaService } from '../../services/sda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-sdas',
  standalone: true,
  imports: [],
  templateUrl: './list-sdas.component.html',
  styleUrl: './list-sdas.component.css',
})
export class ListSdasComponent {
  SdaService = inject(SdaService);
  Sdas: any[] = [];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.getSdasByUser();
  }

  viewSda(uuid: string) {
    console.log(uuid);
    this.router.navigate(['/show-sda'], { state: { uuid } });
  }

  getSdasByUser() {
    this.SdaService.getSdasByUser('JohnDoe').subscribe({
      next: (data: any[]) => {
        this.Sdas = data;
        console.log('SDAs fetched successfully:', this.Sdas);
      },
      error: (error) => {
        console.error('Error fetching sdas by UserName :', error); // Handle errors
      },
    });
  }
}
