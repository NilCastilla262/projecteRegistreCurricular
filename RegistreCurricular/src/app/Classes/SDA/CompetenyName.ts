export class CompetencyName {
  private _UUidCompetenciaNameValue: String;
  private _UUidCompetenciaNamePlantilla: String;
  private _TreballatValue: Boolean;

  constructor() {
    this._UUidCompetenciaNameValue = '';
    this._UUidCompetenciaNamePlantilla = '';
    this._TreballatValue = false;
  }
}

export class CompetenciesName {
  private _CompetenciesName: CompetencyName[];

  constructor() {
    this._CompetenciesName = [];
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
}
