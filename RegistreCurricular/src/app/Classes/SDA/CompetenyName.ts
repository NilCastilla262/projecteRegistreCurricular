export class CompetencyName {
  private _UUidCompetenciaNameValue: String;
  private _UUidCompetenciaNamePlantilla: String;
  private _TreballatValue: Boolean;

  constructor() {
    this._UUidCompetenciaNameValue = '';
    this._UUidCompetenciaNamePlantilla = '';
    this._TreballatValue = false;
  }

  public get UUidCompetenciaNameValue(): String {
    return this._UUidCompetenciaNameValue;
  }

  public set UUidCompetenciaNameValue(value: String) {
    this._UUidCompetenciaNameValue = value;
  }

  public get UUidCompetenciaNamePlantilla(): String {
    return this._UUidCompetenciaNamePlantilla;
  }

  public set UUidCompetenciaNamePlantilla(value: String) {
    this._UUidCompetenciaNamePlantilla = value;
  }

  public get TreballatValue(): Boolean {
    return this._TreballatValue;
  }

  public set TreballatValue(value: Boolean) {
    this._TreballatValue = value;
  }
}

export class CompetenciesName {
  private _CompetenciesName: CompetencyName[];

  constructor() {
    this._CompetenciesName = [];
  }

  public get CompetenciesName(): CompetencyName[] {
    return this._CompetenciesName;
  }

  public set CompetenciesName(value: CompetencyName[]) {
    this._CompetenciesName = value;
  }
}

export class CompetenciaNamePlantilla {
  private _UUIdCompetenciaNamePlantilla: String;
  private _UUIdCompetenciaTypePlantilla: String;
  private _CompetenciaNameDescriptionPlantilla: String;

  constructor() {
    this._UUIdCompetenciaNamePlantilla = '';
    this._UUIdCompetenciaTypePlantilla = '';
    this._CompetenciaNameDescriptionPlantilla = '';
  }

  public get UUIdCompetenciaNamePlantilla(): String {
    return this._UUIdCompetenciaNamePlantilla;
  }

  public set UUIdCompetenciaNamePlantilla(value: String) {
    this._UUIdCompetenciaNamePlantilla = value;
  }

  public get UUIdCompetenciaTypePlantilla(): String {
    return this._UUIdCompetenciaTypePlantilla;
  }

  public set UUIdCompetenciaTypePlantilla(value: String) {
    this._UUIdCompetenciaTypePlantilla = value;
  }

  public get CompetenciaNameDescriptionPlantilla(): String {
    return this._CompetenciaNameDescriptionPlantilla;
  }

  public set CompetenciaNameDescriptionPlantilla(value: String) {
    this._CompetenciaNameDescriptionPlantilla = value;
  }
}

