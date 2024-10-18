export class Criteri {
    private _UUIdCriteriValue : string;
    private _UUIdCompetenciaDescripcioPlantilla : string;
    private _UUIdCriteriPlantilla : string;
    private _treballat : string ;
    constructor() {
        this._UUIdCriteriValue ="";
        this._treballat  ="";
        this._UUIdCompetenciaDescripcioPlantilla= "";
        this._UUIdCriteriPlantilla = "";
    }

}


export class Criteries {
    criteris: Criteri[] = [];
}

export class CriteriPlantilla {
    private _UUIdCriteriPlantilla : string;
    private _UUIdCompetenciaDescripcioPlantilla : string;
    private _descripcio : string;
    

    constructor() {
        this._UUIdCriteriPlantilla ="";
        this._UUIdCompetenciaDescripcioPlantilla = "";
        this._descripcio = "";
        }




}