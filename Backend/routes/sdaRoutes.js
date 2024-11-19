// routes/competencyRoutes.js
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");

router.get("/Users", usersController.getAllUsers);

module.exports = router;
