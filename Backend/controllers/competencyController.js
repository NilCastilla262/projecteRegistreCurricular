// controllers/competencyController.js
const competencyQueries = require("../models/competencyQueries");

async function getAllCompetencyTypesPl(req, res) {
  try {
    const competencies = await competencyQueries.getAllCompetencyTypesPl();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Competency Types Pl" });
  }
}
async function getAllCompetencyDescriptionsPl(req, res) {
  try {
    const competencies =
      await competencyQueries.getAllCompetencyDescriptionsPl();
    res.json(competencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve competency Description Pl" });
  }
}
async function getAllCompetencyNamesPl(req, res) {
  try {
    const competencies = await competencyQueries.getAllCompetencyNamesPl();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Competency Name Pl" });
  }
}

async function getAllCompetencyTypesVal(req, res) {
  try {
    const competencies = await competencyQueries.getAllCompetencyTypesVal();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Competency Type val " });
  }
}
async function getAllCompetencyDescriptionsVal(req, res) {
  try {
    const competencies =
      await competencyQueries.getAllCompetencyDescriptionsVal();
    res.json(competencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve competency Description val " });
  }
}
async function getAllCompetencyNamesVal(req, res) {
  try {
    const competencies = await competencyQueries.getAllCompetencyNamesVal();
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Competency Val " });
  }
}
async function getAllCompetencyDescriptionsPlById(req, res) {
  const { id } = req.params;
  try {
    const competencies =
      await competencyQueries.getAllCompetencyDescriptionPlById(id);
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Competency Val " });
  }
}

module.exports = {
  getAllCompetencyTypesPl,
  getAllCompetencyNamesPl,
  getAllCompetencyDescriptionsPl,
  getAllCompetencyTypesVal,
  getAllCompetencyNamesVal,
  getAllCompetencyDescriptionsVal,
  getAllCompetencyDescriptionsPlById,
};
