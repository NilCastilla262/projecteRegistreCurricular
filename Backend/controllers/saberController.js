// controllers/competencyController.js
const saberQueries = require("../models/saberQueries");

async function getAllSaberCriteriaPl(req, res) {
  try {
    const competencies = await saberQueries.getAllSaberCriteriaPl();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve saber  criteria  Pl" });
  }
}
async function getAllSaberCriteriaVal(req, res) {
  try {
    const competencies = await saberQueries.getAllSaberCriteriaVal();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve saber  criteria  Val" });
  }
}
async function getAllSaberDescriptionsPl(req, res) {
  try {
    const competencies = await saberQueries.getAllSaberDescriptionsPl();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Saber Description  Pl" });
  }
}

async function getAllSaberDescriptionsVal(req, res) {
  try {
    const competencies = await competencyQueries.getAllSaberDescriptionsVal();
    res.json(competencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve Saber Description   val " });
  }
}

module.exports = {
  getAllSaberDescriptionsVal,
  getAllSaberDescriptionsPl,
  getAllSaberCriteriaPl,
  getAllSaberCriteriaVal,
};
