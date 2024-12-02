import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-center-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-center-form.component.html',
  styleUrl: './create-center-form.component.css'
})
export class CreateCenterFormComponent {
  center = {
    name: '',
    adminEmail: '',
    municipality: ''
  };

  centerCreated?: boolean;

  municipalities: string[] = [
    'Argelaguer',
    'Besalú',
    'Beuda',
    'Castellfollit de la Roca',
    'Les Planes d’Hostoles',
    'Maià de Montcal',
    'Mieres',
    'Montagut i Oix',
    'Olot',
    'Riudaura',
    'Sant Aniol de Finestres',
    'Sant Feliu de Pallerols',
    'Sant Ferriol',
    'Santa Pau',
    'Tortellà',
    'Vall de Bianya',
    'Vall d’en Bas'
  ];

  createCenter(): void {
  }

  isFormValid(): boolean {
    return (
      this.center.name.trim() !== '' &&
      this.center.adminEmail.trim() !== '' &&
      this.center.municipality.trim() !== ''
    );
  }
}
