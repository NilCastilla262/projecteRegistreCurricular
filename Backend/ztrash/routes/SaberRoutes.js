// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const competencyController = require("../controllers/competencyController");

router.get("/competencyTypePl", competencyController.getAllCompetencyTypesPl);
router.get("/competencyNamePl", competencyController.getAllCompetencyNamesPl);

router.get("/competencyTypeVal", competencyController.getAllCompetencyTypesVal);
router.get("/competencyNameVal", competencyController.getAllCompetencyNamesVal);

module.exports = router;
