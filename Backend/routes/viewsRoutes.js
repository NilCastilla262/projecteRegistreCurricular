const express = require("express");
const router = express.Router();
const viewsController = require("../controllers/viewsController");
router.get("/GetViewSaberCriteriaVal", viewsController.GetViewSaberCriteriaVal);
router.get("/GetViewCriteriaVal", viewsController.GetViewCriteriaVal);
router.get(
  "/GetViewCompetencyDescriptionVal",
  viewsController.GetViewCompetencyDescriptionVal
);
router.get(
  "/GetViewSabersDescriptionVal",
  viewsController.GetViewSabersDescriptionVal
);

module.exports = router;
