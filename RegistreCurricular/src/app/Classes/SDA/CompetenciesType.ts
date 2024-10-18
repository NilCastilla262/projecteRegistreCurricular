export class CompetenciaType {
    private _UUidCompetenciaType : String;
    private _UUidPlantilla : String;

    constructor(){
        this._UUidCompetenciaType = "";
        this._UUidPlantilla = "";
    }


}

export class CompetenciesType {
    private _CompetenciesYtpe : CompetenciaType[];

    constructor(){
        this._CompetenciesYtpe=[];
    }
}