export class CompetencesDescription{
    private _UUIdCompetenceDescriptionValue: string;
    private _UUIdCompetenceNameValue: string;
    private _UUIdCompetenceNamePlantilla: string;
    constructor() {
        this._UUIdCompetenceDescriptionValue = '';
        this._UUIdCompetenceNameValue = '';
        this._UUIdCompetenceNamePlantilla = '';
    }


    public get UUIdCompetenceDescriptionValue(): string {
        return this._UUIdCompetenceDescriptionValue;
      }
    
      public set UUIdCompetenceDescriptionValue(value: string) {
        this._UUIdCompetenceDescriptionValue = value;
      }
    
      public get UUIdCompetenceNameValue(): string {
        return this._UUIdCompetenceNameValue;
      }
    
      public set UUIdCompetenceNameValue(value: string) {
        this._UUIdCompetenceNameValue = value;
      }
    
      public get UUIdCompetenceNamePlantilla(): string {
        return this._UUIdCompetenceNamePlantilla;
      }
    
      public set UUIdCompetenceNamePlantilla(value: string) {
        this._UUIdCompetenceNamePlantilla = value;
      }
    }
