// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const sdasController = require("../controllers/sdaController");

router.get("/getSdas", sdasController.getAllSdas);
router.get("/getSdaByGroupName", sdasController.getSdaByGroupName);

module.exports = router;
