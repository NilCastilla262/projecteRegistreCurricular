// import { Component, inject, OnInit } from '@angular/core';
// import { forkJoin } from 'rxjs';
// import { CompetencyService } from '../../services/competency.service';
// import { CriteriaService } from '../../services/criteria.service';
// import { SabersService } from '../../services/sabers.service';

// @Component({
//   selector: 'app-show-sda',
//   standalone: true,
//   imports: [],
//   templateUrl: './show-sda.component.html',
//   styleUrls: ['./show-sda.component.css'], // Fixed styleUrl to styleUrls
// })
// export class ShowSdaComponent implements OnInit {
//   competencyDescriptionList: any[] = [];
//   sabersDescriptionList: any[] = [];
//   saberCritarisList: any[] = [];
//   competencyNamesList: any[] = [];
//   competencyTypesList: any[] = [];
//   CriteriesList: any[] = [];

//   competencyService = inject(CompetencyService);
//   criteriaService = inject(CriteriaService);
//   sabersService = inject(SabersService);

//   ngOnInit(): void {
//     // Load all data before rendering
//     this.loadData();
//   }

//   loadData(): void {
//     forkJoin({
//       competencyDescriptions:
//         this.competencyService.getAllCompetencyDescription(),
//       competencyNames: this.competencyService.getAllCompetencyName(),
//       competencyTypes: this.competencyService.getAllCompetencyType(),
//       criterias: this.criteriaService.getAllCriteries(),
//       sabersDescriptions: this.sabersService.getAllSabersDescription(),
//       saberCriterias: this.sabersService.getAllSaberCritaris(),
//     }).subscribe({
//       next: (results) => {
//         // Populate component variables with fetched data
//         this.fillData(results);
//         console.log('All data loaded successfully', results);
//       },
//       error: (error) => {
//         console.error('Error loading data:', error);
//       },
//     });
//   }

//   fillData(results: {
//     competencyDescriptions: any[];
//     competencyNames: any[];
//     competencyTypes: any[];
//     criterias: any[];
//     sabersDescriptions: any[];
//     saberCriterias: any[];
//   }): void {
//     this.competencyDescriptionList = results.competencyDescriptions;
//     this.competencyNamesList = results.competencyNames;
//     this.competencyTypesList = results.competencyTypes;
//     this.CriteriesList = results.criterias;
//     this.sabersDescriptionList = results.sabersDescriptions;
//     this.saberCritarisList = results.saberCriterias;
//   }

//   // Filtering methods remain unchanged
//   filterCompetencyNameById(typeId: string) {
//     return this.competencyNamesList.filter(
//       (item) => item.UUID_CompetencyType === typeId
//     );
//   }

//   filterCompetencyDescriptionById(NameId: string) {
//     return this.competencyDescriptionList.filter(
//       (item) => item.UUID_CompetencyName === NameId
//     );
//   }

//   filterSabersDescriptionById(NameId: string) {
//     return this.sabersDescriptionList.filter(
//       (item) => item.UUID_CompetencyName === NameId
//     );
//   }

//   filterCriteriaById(DescriptionId: string) {
//     return this.CriteriesList.filter(
//       (item) => item.UUID_CompetencyDescription === DescriptionId
//     );
//   }

//   filterSaberCriteriaById(saberDescriptionId: string) {
//     return this.CriteriesList.filter(
//       (item) => item.UUID_SabersDescription === saberDescriptionId
//     );
//   }
// }

import { Component, inject } from '@angular/core';
import { CompetencyService } from '../../services/competency.service';
import { CriteriaService } from '../../services/criteria.service';
import { SabersService } from '../../services/sabers.service';
import { ValuesService } from '../../services/values.service';
import { lastValueFrom, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
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
  competencyService = inject(CompetencyService);
  CriteriaService = inject(CriteriaService);
  SabersService = inject(SabersService);
  ValuesService = inject(ValuesService);
  ngOnInit(): void {
    this.getAllCompetencyDescription();
    this.getAllCompetencyName();
    this.getAllCompetencyType();
    this.getAllCriterias();
    this.getAllSabersDescription();
    this.getAllSaberCritaris();
  }

  async getValBySdaPl(uuid_sda: string, uuid_Pl: string, tableName: string) {
    const sda = '55FA98B1-DE38-4CEB-9AFC-599ADEED8048';
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

  onCheckboxChange() {}

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
    return this.competencyDescriptionList.filter(
      (item) => item.UUID_CompetencyName === NameId
    );
  }
  filterSabersDescriptionById(NameId: string) {
    /*   console.log(
      'array filter : ',
      this.sabersDescriptionList.filter(
        (item) => item.UUID_CompetencyName === NameId
      )
    ); */

    return this.sabersDescriptionList.filter(
      (item) => item.UUID_CompetencyName === NameId
    );
  }
  filterCriteriaById(DescriptionId: string) {
    return this.CriteriesList.filter(
      (item) => item.UUID_CompetencyDescription === DescriptionId
    );
  }
  filterSaberCriteriaById(saberDescriptionId: string) {
    return this.saberCritarisList.filter(
      (item) => item.UUID_SabersDescription === saberDescriptionId
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
}
