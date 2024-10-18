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
}

export class Vectors {
  private _vectors: Vector[];
  constructor() {
    this._vectors = [];
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
}
