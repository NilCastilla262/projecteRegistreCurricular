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

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
router.get("/competencyTypePl", competencyController.getAllCompetencyTypesPl);
router.get("/competencyNamePl", competencyController.getAllCompetencyNamesPl);
router.get(
  "/competencyDescriptionPl",
  competencyController.getAllCompetencyDescriptionsPl
);
router.get("/competencyTypeVal", competencyController.getAllCompetencyTypesVal);
router.get("/competencyNameVal", competencyController.getAllCompetencyNamesVal);
router.get(
  "/competencyDescriptionVal",
  competencyController.getAllCompetencyDescriptionsVal
);
module.exports = router;
