export class CompetencyType {
  private _UUIdCompetenciaType: string;
  private _UUIdCompetenciaPlantilla: string;

  constructor() {
    this._UUIdCompetenciaType = '';
    this._UUIdCompetenciaPlantilla = '';
  }
}

export class CompetencyTypes {
  private _competenciesTypes: CompetencyType[];
  constructor() {
    this._competenciesTypes = [];
  }
}
