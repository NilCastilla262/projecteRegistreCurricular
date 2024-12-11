import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SdaService } from '../../services/sda.service';
import { Sda } from '../../Constants/Sda';

@Component({
  selector: 'app-create-sda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-sda.component.html',
  styleUrls: ['./create-sda.component.css'],
})
export class CreateSdaComponent {
  constructor(private sdaService: SdaService) {}
  sdaCreated?: boolean;

  sda = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    selectedSubjects: [] as string[],
    selectedClass: '',
    selectedGroup: '',
  };

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

  courses = ['1r', '2n', '3r', '4t', '5è', '6è'];
  groups = ['A', 'B', 'C'];

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
      selectedGroup,
      selectedClass,
    } = this.sda;

    const isTitleValid = title && title.trim().length > 0;
    const isDescriptionValid = description && description.trim().length > 0;
    const isStartDateValid = startDate && startDate.trim().length > 0;
    const isEndDateValid = endDate && endDate.trim().length > 0;
    const areSubjectsSelected = selectedSubjects.length > 0;
    const isGroupSelected = selectedGroup && selectedGroup.trim().length > 0;
    const isClassSelected = selectedClass && selectedClass.trim().length > 0;
    const isValid =
      isTitleValid &&
      isDescriptionValid &&
      isStartDateValid &&
      isEndDateValid &&
      areSubjectsSelected &&
      isGroupSelected &&
      isClassSelected;

    return isValid as boolean;
  }

  groupIsDisabled() {
    return !this.sda.selectedClass;
  }

  createSda(): void {
    const uuid_sda = this.createSdaDb(this.sda);
    this.createSdaWithPlantilla(uuid_sda);
  }

  createSdaDb(sda: Sda): string {
    // sdaService.newSda(this.sda.title);

    return '';
  }

  createSdaWithPlantilla(sda: string): void {}
}
