export class Sda {
  private _UUIdSda: string;
  private _UUIdCurriculum: string;
  private _UUIdCentre: string;
  private _year: number;

  constructor() {
    this._UUIdSda = '';
    this._UUIdCurriculum = '';
    this._UUIdCentre = '';
    this._year = 0;
  }
}

export class Sdas {
  private _Sdas: Sda[];
  constructor() {
    this._Sdas = [];
  }
}
