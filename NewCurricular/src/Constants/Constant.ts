export const Constant = {
  API_Competency_END_POINT: {
    get_All_CompetencyType: 'competencyTypePl',
    get_All_CompetencyName: 'competencyNamePl',
    get_All_CompetencyDescription: 'competencyDescriptionPl',
    get_All_Criteria: 'CriteriesPl',

    get_All_SabersDescription: 'GetAllSabersDescription',
    get_All_SaberCritaris: 'GetAllSaberCritaris',

    NewCompetencyDescriptionVal: 'NewCompetencyDescriptionVal',
    newCriteriVal: 'NewCriteriVal',
    NewSabersDescriptionVal: 'NewSabersDescriptionVal',
    NewSaberCriteri: 'NewSaberCriteri',
    getValBySdaPl: 'getValBySdaPl',
    toggleTreballat: 'toggle-treballat',
    newSda: 'newSda',
    getAllSdas: 'getAllSdas',
    getSdaByGroupName: 'getSdaByGroupName',
    getSdasByUser: 'getSdasByUser',
  },
  API_VIEWS_END_POINT: {
    GetViewCompetencyDescriptionVal: 'GetViewCompetencyDescriptionVal',
    GetViewCriteriaVal: 'GetViewCriteriaVal',
    GetViewSaberCriteriaVal: 'GetViewSaberCriteriaVal',
    GetViewSabersDescriptionVal: 'GetViewSabersDescriptionVal',
  },
};

//   getAllCompetencyDescription(): Observable<any> {
//     return this.http.get<any>(
//       //environment.api_main_url + 'Competency' + '/competencyDescriptionPl'
//       'http://localhost:3000/api/Competency/competencyDescriptionPl'
//     );
//   }
