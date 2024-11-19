// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const plantillaController = require("../controllers/plantillaController");

router.get("/Groups", plantillaController.getAllPlantilles);

module.exports = router;
