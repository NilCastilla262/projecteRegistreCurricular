const sabersQueries = require("../models/criteriaQueries");

async function GetAllSabersDescription(req, res) {
  try {
    const sabersDescriptions = await sabersQueries.getAllCriteriaPl();
    res.json(sabersDescriptions);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sabersDescriptions Pl " });
  }
}

async function GetAllSaberCritaris(req, res) {
  try {
    const saberCritaris = await sabersQueries.getAllCriteriaVal();
    res.json(saberCritaris);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve saberCritaris Val " });
  }
}
module.exports = {
  GetAllSabersDescription,
  GetAllSaberCritaris,
};
