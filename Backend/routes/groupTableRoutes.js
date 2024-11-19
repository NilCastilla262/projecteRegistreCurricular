// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const groupTableController = require("../controllers/groupTableController");

router.get("/Groups", groupTableController.getAllGroups);

module.exports = router;
