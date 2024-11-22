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
    selectedSubjects: [] as string[]
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
    const { title, description, startDate, endDate, selectedSubjects } = this.sda;

    const isTitleValid = title && title.trim().length > 0;
    const isDescriptionValid = description && description.trim().length > 0;
    const isStartDateValid = startDate && startDate.trim().length > 0;
    const isEndDateValid = endDate && endDate.trim().length > 0;
    const areSubjectsSelected = selectedSubjects.length > 0;

    const isValid = isTitleValid && isDescriptionValid && isStartDateValid && isEndDateValid && areSubjectsSelected;
    
    return isValid as boolean;
  }

  createSda(): boolean {
    const success = this.performCreateSda();
    console.log("assasasa",this.sdaCreated)
    this.sdaCreated = success;
    return success;
  }

  performCreateSda(): boolean {
    return true
  }
 
}
