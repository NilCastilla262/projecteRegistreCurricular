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

export class CriteriPlantilla {
  private _UUIdCriteriPlantilla: string;
  private _UUIdCompetenciaDescripcioPlantilla: string;
  private _descripcio: string;

  constructor() {
    this._UUIdCriteriPlantilla = '';
    this._UUIdCompetenciaDescripcioPlantilla = '';
    this._descripcio = '';
  }
}
