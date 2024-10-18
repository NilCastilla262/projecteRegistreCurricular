export class Saber {
  private _UUIdSaberValue: string;
  private _UUIdSaberDescripcioValue: string;
  private _UUIdSaberCriteriPlantilla: string;
  private _treballat: string;
  constructor() {
    this._UUIdSaberValue = '';
    this._UUIdSaberDescripcioValue = '';
    this._UUIdSaberCriteriPlantilla = '';
    this._treballat = '';
  }
}

export class Sabers {
  criteris: Saber[] = [];
}

export class SaberCriteriPlantilla {
  private _UUIdSaberCriteriPlantilla: string;
  private _UUIdSabersDescripcioPlantilla: string;
  private _descripcio: string;

  constructor() {
    this._UUIdSaberCriteriPlantilla = '';
    this._UUIdSabersDescripcioPlantilla = '';
    this._descripcio = '';
  }
}
