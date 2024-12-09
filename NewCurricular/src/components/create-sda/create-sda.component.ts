import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-create-sda',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './create-sda.component.html',
  styleUrls: ['./create-sda.component.css']
})
export class CreateSdaComponent {

  sdaCreated?: boolean; 
  
  sda = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    selectedSubjects: [] as string[],
    selectedGroup: ''
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
    'Competència personal, social i d\'apendre a aprendre (CPSAA)'
  ];

  groups = ['1r A', '2n A', '3r A', '4t A', '5è A', '6è A'];

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
    const { title, description, startDate, endDate, selectedSubjects, selectedGroup } = this.sda;

    const isTitleValid = title && title.trim().length > 0;
    const isDescriptionValid = description && description.trim().length > 0;
    const isStartDateValid = startDate && startDate.trim().length > 0;
    const isEndDateValid = endDate && endDate.trim().length > 0;
    const areSubjectsSelected = selectedSubjects.length > 0;
    const isGroupSelected = selectedGroup && selectedGroup.trim().length > 0;

    const isValid = isTitleValid && isDescriptionValid && isStartDateValid && isEndDateValid && areSubjectsSelected && isGroupSelected;
    
    return isValid as boolean;
  }

  createSda(): void {
    const success = this.performCreateSda();
    this.sdaCreated = success;
  }

  performCreateSda(): boolean {
    let created = true;
    return created;
  }
 
}
