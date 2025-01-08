const express = require("express");
const router = express.Router();
const viewsController = require("../controllers/viewsController");
router.get(
  "/getAllCompetencyDescriptionBySda",
  viewsController.getAllCompetencyDescriptionBySda
);
