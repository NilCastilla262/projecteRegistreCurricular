// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const elementsController = require("../controllers/criteriaController");

router.get("/newUser", elementsController.getAllCriteriaPl);
router.get("/Users", elementsController.getAllCriteriaVal);
router.get("/Groups", elementsController.getAllCriteriaVal);

module.exports = router;
