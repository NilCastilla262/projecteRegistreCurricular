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

  public get UUIdSdaValue(): string {
    return this._UUIdSdaValue;
  }

  public set UUIdSdaValue(value: string) {
    this._UUIdSdaValue = value;
  }

  public get UUIdPlantillaPl(): string {
    return this._UUIdPlantillaPl;
  }

  public set UUIdPlantillaPl(value: string) {
    this._UUIdPlantillaPl = value;
  }

  public get UUIdGroup(): string {
    return this._UUIdGroup;
  }

  public set UUIdGroup(value: string) {
    this._UUIdGroup = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }
}


export class Sdas {
  private _Sdas: Sda[];

  constructor() {
    this._Sdas = [];
  }

  public get Sdas(): Sda[] {
    return this._Sdas;
  }

  public set Sdas(value: Sda[]) {
    this._Sdas = value;
  }
}
