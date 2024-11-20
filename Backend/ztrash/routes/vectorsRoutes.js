// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const vectorsController = require("../controllers/vectorsController");

router.get("/VectorsPl", vectorsController.getAllVectorsPl);
router.get("/VectorsVal", vectorsController.getAllVectorsVal);

module.exports = router;
