import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SdaService } from '../../services/sda.service';
import { Sda } from '../../Constants/Sda';
import { CompetencyService } from '../../services/competency.service';
import { CriteriaService } from '../../services/criteria.service';
import { SabersService } from '../../services/sabers.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ValuesService } from '../../services/values.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-sda.component.html',
  styleUrls: ['./create-sda.component.css'],
})
export class CreateSdaComponent {
  constructor(private sdaService: SdaService, private router: Router) {}
  sdaCreated?: boolean;

  sda: Sda = new Sda();

  subjects = [
    'Llengua catalana i castellana',
    'Llengua estrangera, 1a',
    'Matemàtiques',
    'Coneixement del medi natural, social i cultural',
    'Educació Artística',
    'Educació Física',
    'Educació en valors cívics i ètics',
    'Competència ciutadana (CC)',
    'Competència emprenedora (CE)',
    'Competència digital (CD)',
    "Competència personal, social i d'apendre a aprendre (CPSAA)",
  ];

  courses = ['1r-2n', '3r-4t', '5è-6è'];
  groups = ['A', 'B', 'C', 'D', 'E'];

  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.sda.selectedSubjects.push(value);
    } else {
      const index = this.sda.selectedSubjects.indexOf(value);
      if (index > -1) {
        this.sda.selectedSubjects.splice(index, 1);
      }
    }
  }

  isFormValid(): boolean {
    const {
      title,
      description,
      startDate,
      endDate,
      selectedSubjects,
      groupLetter,
      curs,
    } = this.sda;

    const isTitleValid = title && title.trim().length > 0;
    const isDescriptionValid = description && description.trim().length > 0;
    const isStartDateValid = startDate;
    const isEndDateValid = endDate;
    const areDatesValid =
      isStartDateValid &&
      isEndDateValid &&
      new Date(startDate) < new Date(endDate);
    const areSubjectsSelected = selectedSubjects.length > 0;
    const isGroupSelected = groupLetter && groupLetter.trim().length > 0;
    const isClassSelected = curs && curs.trim().length > 0;

    const isValid =
      isTitleValid &&
      isDescriptionValid &&
      areDatesValid &&
      areSubjectsSelected &&
      isGroupSelected &&
      isClassSelected;

    return isValid as boolean;
  }

  groupIsDisabled() {
    return !this.sda.curs;
  }

  // createSda(): void {
  //   this.sda.uuid_center = 'B674B1EA-948E-4C5E-8E1A-9A5DE3F6C631';
  //   const uuid_sda = this.createSdaDb(this.sda);
  //   this.createSdaWithPlantilla(uuid_sda);
  // }

  // createSdaDb(sda: Sda): string {
  //   this.sdaService.newSda(sda).subscribe({
  //     next: (response) => console.log('Success:', response),
  //     error: (error) => console.error('Error:', error),
  //   });
  //   /* const uuidSda = this.sdaService
  //     .getSdaByGroupName(this.sda.title)
  //     .subscribe({
  //       next: (response) => console.log('Success:', response),
  //       error: (error) => console.error('Error:', error),
  //     }); */
  //   let array = this.sdaService.getSdaByGroupName(this.sda.title).subscribe({
  //     next: (response) => console.log('Success:', response),
  //     error: (error) => console.error('Error:', error),
  //   });
  //   console.log('sda response  : ');
  //   return '';
  // }

  async createSda(): Promise<void> {
    try {
      // Set UUID center
      this.sda.uuid_center = 'B674B1EA-948E-4C5E-8E1A-9A5DE3F6C631';

      // Create the SDA
      await this.createNewSda(this.sda);

      // Get the UUID of the created SDA
      const uuid_sda = await this.getSdaUuidByGroupName(this.sda.title);
      console.log('sda uod ', uuid_sda);
      // Use the UUID to create SDA with Plantilla
      await this.createSdaWithPlantilla(uuid_sda);

      this.sdaCreated = true;

      this.router.navigate(['/show-sda'], { state: { uuid: uuid_sda } });

    } catch (error) {
      console.error('Error in createSda:', error);
      this.sdaCreated = false;
    }
  }

  async createNewSda(sda: Sda): Promise<void> {
    try {
      const response = await lastValueFrom(this.sdaService.newSda(sda));
      console.log('SDA Creation Success:', response);
    } catch (error) {
      console.error('Error in createNewSda:', error);
      throw error; // Propagate the error
    }
  }

  async getSdaUuidByGroupName(groupName: string): Promise<string> {
    try {
      const response = await lastValueFrom(
        this.sdaService.getSdaByGroupName(groupName)
      );
      console.log('SDA Search Success:', response);

      // Assuming the response contains a `uuid` field
      return response; // Adjust based on your API's response structure
    } catch (error) {
      console.error('Error in getSdaUuidByGroupName:', error);
      throw error; // Propagate the error
    }
  }

  createSdaWithPlantilla(uuid_sda: string): void {
    this.competencyTypesList.forEach((competencyType) => {
      const competencyNames = this.filterCompetencyNameById(
        competencyType.UUID
      );

      competencyNames.forEach((competencyName) => {
        const competencyDescriptions = this.filterCompetencyDescriptionById(
          competencyName.UUID
        );

        competencyDescriptions.forEach((competencyDescription) => {
          console.log(competencyDescription.uuid);
          this.ValuesService.NewCompetencyDescriptionVal(
            competencyDescription.UUID,
            uuid_sda
          ).subscribe({
            next: (response) => {
              console.log('Competency Description Response:', response);

              const criteria = this.filterCriteriaById(
                competencyDescription.UUID
              );
              criteria.forEach((criteri) => {
                this.ValuesService.NewCriteriVal(
                  criteri.UUID,
                  uuid_sda
                ).subscribe({
                  next: (criteriResponse) =>
                    console.log('Criteri Response:', criteriResponse),
                  error: (error) =>
                    console.error('Error in Criteri Response:', error),
                });
              });
            },
            error: (error) =>
              console.error('Error in Competency Description:', error),
          });
        });

        const saberDescriptions = this.filterSabersDescriptionById(
          competencyName.UUID
        );
        saberDescriptions.forEach((saberDescription) => {
          this.ValuesService.NewSabersDescriptionVal(
            uuid_sda,
            saberDescription.UUID
          ).subscribe({
            next: (response) => {
              console.log('Saber Description Response:', response);

              const saberCriteria = this.filterSaberCriteriaById(
                saberDescription.UUID
              );
              saberCriteria.forEach((saberCriteri) => {
                this.ValuesService.NewSaberCriteri(
                  uuid_sda,
                  saberCriteri.UUID
                ).subscribe({
                  next: (saberCriteriResponse) =>
                    console.log(
                      'Saber Criteri Response:',
                      saberCriteriResponse
                    ),
                  error: (error) =>
                    console.error('Error in Saber Criteri Response:', error),
                });
              });
            },
            error: (error) =>
              console.error('Error in Saber Description:', error),
          });
        });
      });
    });
  }

  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
  /////////////////////////////
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
    console.log('sab cr done ');
  }
}
