import { Component } from '@angular/core';
import { navElement } from '../../Classes/navElement';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  userNumber: number = 2;

  navBar: navElement[] = [
    {
      elementNumber: 0,
      userNum: 0,
      description: 'Gestion Center sAdmin',
    },

    {
      elementNumber: 1,
      userNum: 0,
      description: 'Edita Plantilla sAdmin',
    },

    {
      elementNumber: 2,
      userNum: 0,
      description: 'Editar Usuaris sAdmin',
    },

    {
      elementNumber: 3,
      userNum: 1,
      description: 'gestionar usuaris  Admin',
    },

    {
      elementNumber: 4,
      userNum: 1,
      description: 'generar sdas Admin ',
    },

    {
      elementNumber: 5,
      userNum: 1,
      description: 'gestionar resums Admin ',
    },

    {
      elementNumber: 6,
      userNum: 2,
      description: 'Gestion Sda Profe',
    },

    {
      elementNumber: 7,
      userNum: 2,
      description: 'Gestion Resum profe',
    },
  ];
}
