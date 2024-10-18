export class Critera {
  private _UUIdCriteriValue: string;
  private _UUIdCompetenciaDescripcioPlantilla: string;
  private _UUIdCriteriPlantilla: string;
  private _treballat: string;

  constructor() {
    this._UUIdCriteriValue = '';
    this._treballat = '';
    this._UUIdCompetenciaDescripcioPlantilla = '';
    this._UUIdCriteriPlantilla = '';
  }

  public get UUIdCriteriValue(): string {
    return this._UUIdCriteriValue;
  }

  public set UUIdCriteriValue(value: string) {
    this._UUIdCriteriValue = value;
  }

  public get UUIdCompetenciaDescripcioPlantilla(): string {
    return this._UUIdCompetenciaDescripcioPlantilla;
  }

  public set UUIdCompetenciaDescripcioPlantilla(value: string) {
    this._UUIdCompetenciaDescripcioPlantilla = value;
  }

  public get UUIdCriteriPlantilla(): string {
    return this._UUIdCriteriPlantilla;
  }

  public set UUIdCriteriPlantilla(value: string) {
    this._UUIdCriteriPlantilla = value;
  }

  public get treballat(): string {
    return this._treballat;
  }

  public set treballat(value: string) {
    this._treballat = value;
  }
}


export class Criteries {
  private _criteris: Critera[];

  constructor() {
    this._criteris = [];
  }

  public get criteris(): Critera[] {
    return this._criteris;
  }

  public set criteris(value: Critera[]) {
    this._criteris = value;
  }
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

  public get UUIdCriteriPlantilla(): string {
    return this._UUIdCriteriPlantilla;
  }

  public set UUIdCriteriPlantilla(value: string) {
    this._UUIdCriteriPlantilla = value;
  }

  public get UUIdCompetenciaDescripcioPlantilla(): string {
    return this._UUIdCompetenciaDescripcioPlantilla;
  }

  public set UUIdCompetenciaDescripcioPlantilla(value: string) {
    this._UUIdCompetenciaDescripcioPlantilla = value;
  }

  public get descripcio(): string {
    return this._descripcio;
  }

  public set descripcio(value: string) {
    this._descripcio = value;
  }
}