import { Component, inject } from '@angular/core';
import { CompetencyService } from '../../services/competency.service';
import { CriteriaService } from '../../services/criteria.service';
import { SabersService } from '../../services/sabers.service';
import { ValuesService } from '../../services/values.service';
import { lastValueFrom, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ViewsService } from '../../services/views.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-sda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-sda.component.html',
  styleUrl: './show-sda.component.css',
})
export class ShowSdaComponent {
  competencyDescriptionList: any[] = [];
  sabersDescriptionList: any[] = [];
  saberCritarisList: any[] = [];
  competencyNamesList: any[] = [];
  competencyTypesList: any[] = [];
  CriteriesList: any[] = [];
  CriteriesListView: any[] = [];
  saberCritarisListView: any[] = [];
  competencyDescriptionListView: any[] = [];
  sabersDescriptionListView: any[] = [];
  competencyService = inject(CompetencyService);
  CriteriaService = inject(CriteriaService);
  SabersService = inject(SabersService);
  ValuesService = inject(ValuesService);
  ViewsService = inject(ViewsService);
  sdaUUID: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllCompetencyDescription();
    this.getAllCompetencyName();
    this.getAllCompetencyType();
    this.getAllCriterias();
    this.getAllSabersDescription();
    this.getAllSaberCritaris();
    this.GetViewSaberCriteriaVal();
    this.GetViewCompetencyDescriptionVal();
    this.GetViewCriteriaVal();
    this.GetViewSabersDescriptionVal();

    const navigation = this.router.getCurrentNavigation();
    this.sdaUUID = navigation?.extras.state?.['uuid'] || null;
  }

  async getValBySdaPl(uuid_sda: string, uuid_Pl: string, tableName: string) {
    //const sda = '55FA98B1-DE38-4CEB-9AFC-599ADEED8048';
    const sda = this.sdaUUID;
    const pl = '5195BAB9-1DC3-4083-B5BC-0BDAA9C0579B';
    const table = 'SaberCriteria_Val';

    try {
      const response = await lastValueFrom(
        this.ValuesService.getValBySdaPl(sda, uuid_Pl, tableName)
      );
      return response.Treballat;
    } catch (error) {
      console.error('Error fetching value:', error);
      return null; // or handle the error as needed
    }
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

  /*   getAllCompetencyNameById(id: string) {
    this.competencyService.getAllCompetencyNameById(id).subscribe({
      next: (data: any[]) => {
        this.competencyNamesList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching competencies:', error); // Handle errors
      },
    });
  } */

  filterCompetencyNameById(typeId: string) {
    return this.competencyNamesList.filter(
      (item) => item.UUID_CompetencyType === typeId
    );
  }

  filterCompetencyDescriptionById(NameId: string) {
    return this.competencyDescriptionListView.filter(
      (item) => item.UUID_ParePl === NameId
    );
    // return this.competencyDescriptionList.filter(
    //   (item) => item.UUID_CompetencyName === NameId
    // );
  }
  filterSabersDescriptionById(NameId: string) {
    return this.sabersDescriptionListView.filter(
      (item) => item.UUID_ParePl === NameId
    );
    // return this.sabersDescriptionList.filter(
    //   (item) => item.UUID_CompetencyName === NameId
    // );
  }
  filterCriteriaById(DescriptionId: string) {
    return this.CriteriesListView.filter(
      (item) => item.UUID_ParePl === DescriptionId
    );
    // return this.CriteriesList.filter(
    //   (item) => item.UUID_CompetencyDescription === DescriptionId
    // );
  }
  filterSaberCriteriaById(saberDescriptionId: string) {
    // return this.saberCritarisList.filter(
    //   (item) => item.UUID_SabersDescription === saberDescriptionId
    // );
    return this.saberCritarisListView.filter(
      (item) => item.UUID_ParePl === saberDescriptionId
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
  getAllSabersDescription() {
    this.SabersService.getAllSabersDescription().subscribe({
      next: (data: any[]) => {
        this.sabersDescriptionList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching sabers Descriptions:', error); // Handle errors
      },
    });
  }
  getAllSaberCritaris() {
    this.SabersService.getAllSaberCritaris().subscribe({
      next: (data: any[]) => {
        this.saberCritarisList = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching sabers critaris', error); // Handle errors
      },
    });
  }
  GetViewSaberCriteriaVal() {
    this.ViewsService.GetViewSaberCriteriaVal(
      'C57ADA1A-EBD6-4D28-A6A8-30D38F2A7769'
    ).subscribe({
      next: (data: any[]) => {
        this.saberCritarisListView = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching sabers critaris view ', error); // Handle errors
      },
    });
  }
  GetViewCriteriaVal() {
    this.ViewsService.GetViewCriteriaVal(
      'C57ADA1A-EBD6-4D28-A6A8-30D38F2A7769'
    ).subscribe({
      next: (data: any[]) => {
        this.CriteriesListView = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching sabers critaris view ', error); // Handle errors
      },
    });
  }
  GetViewCompetencyDescriptionVal() {
    this.ViewsService.GetViewCompetencyDescriptionVal(
      'C57ADA1A-EBD6-4D28-A6A8-30D38F2A7769'
    ).subscribe({
      next: (data: any[]) => {
        this.competencyDescriptionListView = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching sabers critaris view ', error); // Handle errors
      },
    });
  }
  GetViewSabersDescriptionVal() {
    this.ViewsService.GetViewSabersDescriptionVal(
      'C57ADA1A-EBD6-4D28-A6A8-30D38F2A7769'
    ).subscribe({
      next: (data: any[]) => {
        this.sabersDescriptionListView = data; // Assign data to the local variable
      },
      error: (error) => {
        console.error('Error fetching sabers critaris view ', error); // Handle errors
      },
    });
  }

  onCheckboxChange(event: Event, id: string, code: string): void {
    this.ValuesService.toggleTreballat(
      code,
      'C57ADA1A-EBD6-4D28-A6A8-30D38F2A7769', // Replace with actual UUID_Sda if needed
      id
    ).subscribe({
      next: (response) => {
        console.log('Toggle operation successful:', response);
        // Add any UI update logic here if needed
      },
      error: (error) => {
        console.error('Error during toggle operation:', error);
        alert('Failed to toggle. Please try again.');
      },
    });
  }
}
