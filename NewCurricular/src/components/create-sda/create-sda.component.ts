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
  sda = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    selectedSubjects: []
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
}
