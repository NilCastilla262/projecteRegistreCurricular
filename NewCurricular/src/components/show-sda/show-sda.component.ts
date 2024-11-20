import { Component, inject } from '@angular/core';
import { CompetencyService } from '../../services/competency.service';

@Component({
  selector: 'app-show-sda',
  standalone: true,
  imports: [],
  templateUrl: './show-sda.component.html',
  styleUrl: './show-sda.component.css',
})
export class ShowSdaComponent {
  competencyDescriptionList: any[] = [];
  competencyNamesList: any[] = [];
  competencyTypesList: any[] = [];
  CriteriesList: any[] = [];
  competencyService = inject(CompetencyService);

  ngOnInit(): void {}

  getCompetencyDescriptionById(id: string) {
    this.competencyService.getCompetencyDescriptionById(id).subscribe({
      next: (data: any[]) => {
        this.competencyDescriptionList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching competencies:', error); // Handle errors
      },
    });
  }
}
