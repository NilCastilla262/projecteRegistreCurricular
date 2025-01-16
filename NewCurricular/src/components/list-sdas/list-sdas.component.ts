import { Component } from '@angular/core';
import { SdaService } from '../../services/sda.service';
import { Sda } from '../../Constants/Sda';

@Component({
  selector: 'app-list-sdas',
  standalone: true,
  imports: [],
  templateUrl: './list-sdas.component.html',
  styleUrl: './list-sdas.component.css',
})
export class ListSdasComponent {
  constructor(private sdaService: SdaService) {}

  sdas: any[] = [];
  uuid_User: string = '';
  ngOnInit(): void {
    this.fillArray();
  }

  fillArray() {
    this.uuid_User = 'JohnDoe';
    this.sdaService.getSdasByUser(this.uuid_User).subscribe((sdas: any[]) => {
      this.sdas = sdas;
      console.log('sdsas', this.sdas);
    });
  }
}
