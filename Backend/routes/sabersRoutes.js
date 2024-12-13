// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const sabersController = require("../controllers/sabersController");

router.get(
  "/GetAllSabersDescription",
  sabersController.GetAllSabersDescription
);
router.get("/GetAllSaberCritaris", sabersController.GetAllSaberCritaris);

module.exports = router;
