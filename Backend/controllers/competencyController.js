// controllers/competencyController.js
const competencyQueries = require("../models/competencyQueries");

async function getAllCompetencyDescriptionsPlById(req, res) {
  const { id } = req.params;
  try {
    const competencies =
      await competencyQueries.getAllCompetencyDescriptionPlById(id);
    res.json(competencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve Competency Description by id pl " });
  }
}

async function getAllCompetencyNamePlById(req, res) {
  const { id } = req.params;
  try {
    const competencies = await competencyQueries.getAllCompetencyNamePlById(id);
    res.json(competencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve Competency Name by id  pl " });
  }
}

async function getAllCompetencyTypesPlById(req, res) {
  const { id } = req.params;

  try {
    const competencies = await competencyQueries.getAllCompetencyTypesPlById(
      id
    );
    res.json(competencies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve Competency Types by id  Pl" });
  }
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

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

async function newCompetencyDescriptionVal(req, res) {
  const { sdaNom, UUID_CompetencyDescriptionPl } = req.body;

  if (!sdaNom || !UUID_CompetencyDescriptionPl) {
    return res
      .status(400)
      .json({ error: "Missing required fields: groupValue, yearValue, curs" });
  }
  try {
    const sdas = await competencyQueries.newCompetencyDescriptionVal(
      sdaNom,
      UUID_CompetencyDescriptionPl,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}
async function NewCriteriVal(req, res) {
  const { sdaNom, UUID_CompetencyDescriptionPl } = req.body;

  if (!sdaNom || !UUID_CompetencyDescriptionPl) {
    return res
      .status(400)
      .json({ error: "Missing required fields: groupValue, yearValue, curs" });
  }
  try {
    const sdas = await competencyQueries.newCompetencyDescriptionVal(
      sdaNom,
      UUID_CompetencyDescriptionPl,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
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
  getAllCompetencyNamePlById,
  getAllCompetencyTypesPlById,
  newCompetencyDescriptionVal,
  NewCriteriVal,
};
