export class CompetencyType {
    private _UUIdCompetenciaTypeValue : String;
    private _UUIdCompetenciaTypePlantilla : String;

    constructor(){
        this._UUIdCompetenciaTypeValue = "";
        this._UUIdCompetenciaTypePlantilla = "";
    }


}

export class CompetenciesType {
    private _CompetenciesYtpe : CompetencyType[];

    constructor(){
        this._CompetenciesYtpe=[];
    }
}

export class CompetenciaTypePlantilla {
    private _UUIdCompetenciaTypePlantilla : String;
    private _UUIdPlantilla : String;
    private _CompetenciaTypeDescriptionPlantilla : String;

    constructor(){
        this._UUIdCompetenciaTypePlantilla="";        
        this._UUIdPlantilla="";
        this._CompetenciaTypeDescriptionPlantilla="";
    }
}