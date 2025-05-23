// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const competencyController = require("../controllers/competencyController");
router.get(
  "/competencyNamePl/:id",
  competencyController.getAllCompetencyNamePlById
);
router.get(
  "/competencyDescriptionPl/:id",
  competencyController.getAllCompetencyDescriptionsPlById
);
router.get(
  "/competencyTypePl/:id",
  competencyController.getAllCompetencyTypesPlById
);
////////////////////
router.get("/competencyTypeVal", competencyController.getAllCompetencyTypesVal);
router.get("/competencyNameVal", competencyController.getAllCompetencyNamesVal);
router.get(
  "/competencyDescriptionVal",
  competencyController.getAllCompetencyDescriptionsVal
);
///////////////////
router.get("/competencyTypePl", competencyController.getAllCompetencyTypesPl);
router.get("/competencyNamePl", competencyController.getAllCompetencyNamesPl);
router.get(
  "/competencyDescriptionPl",
  competencyController.getAllCompetencyDescriptionsPl
);

//////////////////////////////////
router.post(
  "/NewCompetencyDescriptionVal",
  competencyController.newCompetencyDescriptionVal
);
router.post("/NewCriteriVal", competencyController.NewCriteriVal);
router.post(
  "/NewSabersDescriptionVal",
  competencyController.NewSabersDescription
);
router.post("/NewSaberCriteri", competencyController.NewSaberCriteri);

module.exports = router;
////////////////////////////////////

router.get(
  "/getCompetencyDescriptionValById",
  competencyController.getCompetencyDescriptionValById
);
router.get("/getCriteriValById", competencyController.getCriteriValById);
router.get(
  "/getSabersDescriptionById",
  competencyController.getSabersDescriptionById
);
router.get("/SaberCriteriaById", competencyController.getSaberCriteriaById);

////////////////////////////////////
router.post("/toggle-treballat", competencyController.toggleTreballat);

////////////////////////////////////

router.post("/getValBySdaPl", competencyController.getValBySdaPl);
