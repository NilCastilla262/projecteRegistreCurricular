// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const criteriaController = require("../controllers/criteriaController");

router.get("/newUser", criteriaController.getAllCriteriaPl);
router.get("/Users", criteriaController.getAllCriteriaVal);
router.get("/Groups", criteriaController.getAllCriteriaVal);

module.exports = router;