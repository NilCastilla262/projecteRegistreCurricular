// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const cursController = require("../controllers/cursController");

router.get("/Curs", cursController.getAllCurs);

module.exports = router;
