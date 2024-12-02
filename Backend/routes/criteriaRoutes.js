// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const criteriaController = require("../ztrash/controllers/criteriaController");

router.get("/CriteriesPl", criteriaController.getAllCriteriaPl);
router.get("/CriteriesVal", criteriaController.getAllCriteriaVal);

module.exports = router;
