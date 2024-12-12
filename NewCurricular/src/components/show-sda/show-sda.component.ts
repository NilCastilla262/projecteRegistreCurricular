import { Component, inject } from '@angular/core';
import { CompetencyService } from '../../services/competency.service';
import { CriteriaService } from '../../services/criteria.service';

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
  CriteriaService = inject(CriteriaService);
  ngOnInit(): void {
    this.getAllCompetencyDescription();
    this.getAllCompetencyName();
    this.getAllCompetencyType();
    this.getAllCriterias();
  }

  getAllCompetencyName() {
    this.competencyService.getAllCompetencyName().subscribe({
      next: (data: any[]) => {
        this.competencyNamesList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching competencies:', error); // Handle errors
      },
    });
  }

  getAllCompetencyNameById(id: string) {
    this.competencyService.getAllCompetencyNameById(id).subscribe({
      next: (data: any[]) => {
        this.competencyNamesList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching competencies:', error); // Handle errors
      },
    });
  }

  filterCompetencyNameById(typeId: string) {
    return this.competencyNamesList.filter(
      (item) => item.UUID_CompetencyType === typeId
    );
  }
  filterCompetencyDescriptionById(NameId: string) {
    return this.competencyDescriptionList.filter(
      (item) => item.UUID_CompetencyName === NameId
    );
  }
  filterCriteriaById(DescriptionId: string) {
    return this.CriteriesList.filter(
      (item) => item.UUID_CompetencyDescription === DescriptionId
    );
  }

  getAllCompetencyType() {
    this.competencyService.getAllCompetencyType().subscribe({
      next: (data: any[]) => {
        this.competencyTypesList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching competencies:', error); // Handle errors
      },
    });
  }
  getAllCriterias() {
    this.CriteriaService.getAllCriteries().subscribe({
      next: (data: any[]) => {
        this.CriteriesList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching criteries:', error); // Handle errors
      },
    });
  }
  getAllCompetencyDescription() {
    this.competencyService.getAllCompetencyDescription().subscribe({
      next: (data: any[]) => {
        this.competencyDescriptionList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching competencies:', error); // Handle errors
      },
    });
  }
}
