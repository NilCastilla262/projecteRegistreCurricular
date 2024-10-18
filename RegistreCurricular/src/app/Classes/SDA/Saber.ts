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

  public get UUIdSaberValue(): string {
    return this._UUIdSaberValue;
  }

  public set UUIdSaberValue(value: string) {
    this._UUIdSaberValue = value;
  }

  public get UUIdSaberDescripcioValue(): string {
    return this._UUIdSaberDescripcioValue;
  }

  public set UUIdSaberDescripcioValue(value: string) {
    this._UUIdSaberDescripcioValue = value;
  }

  public get UUIdSaberCriteriPlantilla(): string {
    return this._UUIdSaberCriteriPlantilla;
  }

  public set UUIdSaberCriteriPlantilla(value: string) {
    this._UUIdSaberCriteriPlantilla = value;
  }

  public get treballat(): string {
    return this._treballat;
  }

  public set treballat(value: string) {
    this._treballat = value;
  }
}


export class Sabers {
  private _sabers: Saber[];
  constructor(){
    this._sabers = [];
  }
  public get criterisList(): Saber[] {
    return this._sabers;
  }

  public set criterisList(value: Saber[]) {
    this._sabers = value;
  }
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

  public get UUIdSaberCriteriPlantilla(): string {
    return this._UUIdSaberCriteriPlantilla;
  }

  public set UUIdSaberCriteriPlantilla(value: string) {
    this._UUIdSaberCriteriPlantilla = value;
  }

  public get UUIdSabersDescripcioPlantilla(): string {
    return this._UUIdSabersDescripcioPlantilla;
  }

  public set UUIdSabersDescripcioPlantilla(value: string) {
    this._UUIdSabersDescripcioPlantilla = value;
  }

  public get descripcio(): string {
    return this._descripcio;
  }

  public set descripcio(value: string) {
    this._descripcio = value;
  }
}

