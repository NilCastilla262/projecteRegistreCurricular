export class CompetencyType {
    private _UUIdCompetenciaTypeValue: String;
    private _UUIdCompetenciaTypePlantilla: String;
  
    constructor() {
      this._UUIdCompetenciaTypeValue = "";
      this._UUIdCompetenciaTypePlantilla = "";
    }
  
    public get UUIdCompetenciaTypeValue(): String {
      return this._UUIdCompetenciaTypeValue;
    }
  
    public set UUIdCompetenciaTypeValue(value: String) {
      this._UUIdCompetenciaTypeValue = value;
    }
  
    public get UUIdCompetenciaTypePlantilla(): String {
      return this._UUIdCompetenciaTypePlantilla;
    }
  
    public set UUIdCompetenciaTypePlantilla(value: String) {
      this._UUIdCompetenciaTypePlantilla = value;
    }
  }
  

  export class CompetenciesType {
    private _CompetenciesYtpe: CompetencyType[];
  
    constructor() {
      this._CompetenciesYtpe = [];
    }
  
    public get CompetenciesYtpe(): CompetencyType[] {
      return this._CompetenciesYtpe;
    }
  
    public set CompetenciesYtpe(value: CompetencyType[]) {
      this._CompetenciesYtpe = value;
    }
  }
  

  export class CompetenciaTypePlantilla {
    private _UUIdCompetenciaTypePlantilla: String;
    private _UUIdPlantilla: String;
    private _CompetenciaTypeDescriptionPlantilla: String;
  
    constructor() {
      this._UUIdCompetenciaTypePlantilla = "";
      this._UUIdPlantilla = "";
      this._CompetenciaTypeDescriptionPlantilla = "";
    }
  
    public get UUIdCompetenciaTypePlantilla(): String {
      return this._UUIdCompetenciaTypePlantilla;
    }
  
    public set UUIdCompetenciaTypePlantilla(value: String) {
      this._UUIdCompetenciaTypePlantilla = value;
    }
  
    public get UUIdPlantilla(): String {
      return this._UUIdPlantilla;
    }
  
    public set UUIdPlantilla(value: String) {
      this._UUIdPlantilla = value;
    }
  
    public get CompetenciaTypeDescriptionPlantilla(): String {
      return this._CompetenciaTypeDescriptionPlantilla;
    }
  
    public set CompetenciaTypeDescriptionPlantilla(value: String) {
      this._CompetenciaTypeDescriptionPlantilla = value;
    }
  }
  