// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const sdasController = require("../controllers/sdaController");

router.get("/getAllSdas", sdasController.getAllSdas);
router.get("/getSdaByGroupName", sdasController.getSdaByGroupName);
router.post("/newSda", sdasController.newSda);
router.get("/getSdasByUser", sdasController.getSdasByUser);

module.exports = router;
