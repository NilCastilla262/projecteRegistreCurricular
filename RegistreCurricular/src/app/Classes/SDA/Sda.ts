export class Sda {
  private _UUIdSdaValue: string;
  private _UUIdPlantillaPl: string;
  private _UUIdGroup: string;
  private _year: number;

  constructor() {
    this._UUIdSdaValue = '';
    this._UUIdPlantillaPl = '';
    this._UUIdGroup = '';
    this._year = 0;
  }
}

export class Sdas {
  private _Sdas: Sda[];
  constructor() {
    this._Sdas = [];
  }
}
