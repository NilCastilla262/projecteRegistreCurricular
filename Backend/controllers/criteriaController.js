const criteriaQueries = require("../models/criteriaQueries");

async function getAllCriteriaPl(req, res) {
  try {
    const criteries = await criteriaQueries.getAllCriteriaPl();
    res.json(criteries);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Criteria Pl " });
  }
}

async function getAllCriteriaVal(req, res) {
  try {
    const criteries = await criteriaQueries.getAllCriteriaVal();
    res.json(criteries);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Criteria Val " });
  }
}
module.exports = {
  getAllCriteriaPl,
  getAllCriteriaVal,
};
