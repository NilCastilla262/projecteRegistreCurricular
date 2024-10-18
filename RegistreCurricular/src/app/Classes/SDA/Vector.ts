export class Vector {
  private _UUIdVectorValue: string;
  private _UUIdVectorPlantilla: string;
  private _UUIdSdaValue: string;
  private _treballatValue: boolean;
  constructor() {
    this._UUIdVectorValue = '';
    this._UUIdVectorPlantilla = '';
    this._treballatValue = false;
    this._UUIdSdaValue = '';
  }

  public get UUIdVectorValue(): string {
    return this._UUIdVectorValue;
  }

  public set UUIdVectorValue(value: string) {
    this._UUIdVectorValue = value;
  }

  public get UUIdVectorPlantilla(): string {
    return this._UUIdVectorPlantilla;
  }

  public set UUIdVectorPlantilla(value: string) {
    this._UUIdVectorPlantilla = value;
  }

  public get UUIdSdaValue(): string {
    return this._UUIdSdaValue;
  }

  public set UUIdSdaValue(value: string) {
    this._UUIdSdaValue = value;
  }

  public get treballatValue(): boolean {
    return this._treballatValue;
  }

  public set treballatValue(value: boolean) {
    this._treballatValue = value;
  }
}

export class Vectors {
  private _vectors: Vector[];
  constructor() {
    this._vectors = [];
  }

  public get vectors(): Vector[] {
    return this._vectors;
  }

  public set vectors(value: Vector[]) {
    this._vectors = value;
  }
}

export class VectorPlantilla {
  private _UUIdVectorPlantilla: string;
  private _UUIdPlantilla: string;
  private _VecotrsDescriptionPlantilla: string;
  constructor() {
    this._UUIdVectorPlantilla = '';
    this._UUIdPlantilla = '';
    this._VecotrsDescriptionPlantilla = '';
  }

  public get UUIdVectorPlantilla(): string {
    return this._UUIdVectorPlantilla;
  }

  public set UUIdVectorPlantilla(value: string) {
    this._UUIdVectorPlantilla = value;
  }

  public get UUIdPlantilla(): string {
    return this._UUIdPlantilla;
  }

  public set UUIdPlantilla(value: string) {
    this._UUIdPlantilla = value;
  }

  public get VecotrsDescriptionPlantilla(): string {
    return this._VecotrsDescriptionPlantilla;
  }

  public set VecotrsDescriptionPlantilla(value: string) {
    this._VecotrsDescriptionPlantilla = value;
  }
}
