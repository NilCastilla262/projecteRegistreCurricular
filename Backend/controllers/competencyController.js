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
    return res.status(400).json({
      error: "Missing required fields: sdaNom, UUID_CompetencyDescriptionPl",
    });
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
  const { sdaNom, UUID_CriteriPl } = req.body;

  if (!sdaNom || !UUID_CriteriPl) {
    return res
      .status(400)
      .json({ error: "Missing required fields: sdaNom, UUID_CriteriPl" });
  }
  try {
    const sdas = await competencyQueries.NewCriteriVal(
      sdaNom,
      UUID_CriteriPl,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}

async function NewSabersDescription(req, res) {
  const { sdaNom, UUID_SabersDescriptionPl } = req.body;

  if (!sdaNom || !UUID_SabersDescriptionPl) {
    return res.status(400).json({
      error: "Missing required fields: sdaNom, UUID_SabersDescriptionPl",
    });
  }
  try {
    const sdas = await competencyQueries.NewSabersDescription(
      sdaNom,
      UUID_SabersDescriptionPl,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}
async function NewSaberCriteri(req, res) {
  const { sdaNom, UUID_SaberCriteriPl } = req.body;

  if (!sdaNom || !UUID_SaberCriteriPl) {
    return res
      .status(400)
      .json({ error: "Missing required fields: sdaNom, UUID_SaberCriteriPl" });
  }
  try {
    const sdas = await competencyQueries.NewSaberCriteri(
      sdaNom,
      UUID_SaberCriteriPl,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}
/////////////////////////
async function getCompetencyDescriptionValById(req, res) {
  const { UUID_CompetencyDescription } = req.body;

  // Validate input
  if (!UUID_CompetencyDescription) {
    return res.status(400).json({
      error: "Missing required field: UUID_CompetencyDescription",
    });
  }

  try {
    // Fetch competency description
    const competencyDescription =
      await competencyQueries.getCompetencyDescriptionValById(
        UUID_CompetencyDescription
      );

    if (!competencyDescription) {
      return res
        .status(404)
        .json({ error: "Competency description not found" });
    }

    // Return the result
    return res.json(competencyDescription);
  } catch (error) {
    console.error("Error retrieving competency description by ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve competency description by ID" });
  }
}
async function getCriteriValById(req, res) {
  const { UUID_Criteri } = req.body;

  // Validate input
  if (!UUID_Criteri) {
    return res.status(400).json({
      error: "Missing required field: UUID_Criteri",
    });
  }

  try {
    // Fetch competency description
    const criteri = await competencyQueries.getCriteriValById(UUID_Criteri);

    if (!criteri) {
      return res.status(404).json({ error: "criteri not found" });
    }

    // Return the result
    return res.json(criteri);
  } catch (error) {
    console.error("Error retrieving criteri by ID:", error);
    return res.status(500).json({ error: "Failed to retrieve criteri by ID" });
  }
}
async function getSabersDescriptionById(req, res) {
  const { UUID_SabersDescription } = req.body;

  // Validate input
  if (!UUID_SabersDescription) {
    return res.status(400).json({
      error: "Missing required field: UUID_SabersDescription",
    });
  }

  try {
    // Fetch competency description
    const criteri = await competencyQueries.getSabersDescriptionById(
      UUID_SabersDescription
    );

    if (!criteri) {
      return res.status(404).json({ error: "SabersDescription not found" });
    }

    // Return the result
    return res.json(criteri);
  } catch (error) {
    console.error("Error retrieving criteri by ID:", error);
    return res.status(500).json({ error: "Failed to retrieve criteri by ID" });
  }
}
async function getSaberCriteriaById(req, res) {
  const { UUID_SaberCriteri } = req.body;

  // Validate input
  if (!UUID_SaberCriteri) {
    return res.status(400).json({
      error: "Missing required field: UUID_SaberCriteri",
    });
  }

  try {
    // Fetch competency description
    const SaberCriteria_ = await competencyQueries.getSaberCriteriaById(
      UUID_SaberCriteri
    );

    if (!SaberCriteria_) {
      return res.status(404).json({ error: "SabersDescription not found" });
    }

    // Return the result
    return res.json(SaberCriteria_);
  } catch (error) {
    console.error("Error retrieving criteri by ID:", error);
    return res.status(500).json({ error: "Failed to retrieve criteri by ID" });
  }
}

/////////////////////////

async function toggleTreballat(req, res) {
  const { tableName, id } = req.body;

  // Validate input
  if (!tableName || !id) {
    return res.status(400).json({
      error: "Missing required query parameters: tableName or id",
    });
  }

  try {
    // Call the toggle function
    const updatedRow = await competencyQueries.toggleTreballatByIdAndTable(
      tableName,
      id
    );

    // Return the updated row
    return res.status(200).json({
      message: "Successfully toggled treballat field",
      data: updatedRow,
    });
  } catch (error) {
    console.error("Error toggling treballat:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getValBySdaPl(req, res) {
  const { UUID_Sda, UUID_CompetencyDescriptionPl, tableName } = req.body;

  // Validate input
  if (!UUID_CompetencyDescriptionPl || !UUID_Sda || !tableName) {
    return res.status(400).json({
      error:
        "Missing required field:  UUID_CompetencyDescriptionPl , UUID_Sda ,tableName",
    });
  }

  try {
    // Fetch competency description
    const competencyDescription = await competencyQueries.getValBySdaPl(
      UUID_Sda,
      UUID_CompetencyDescriptionPl,
      tableName
    );

    if (!competencyDescription) {
      return res
        .status(404)
        .json({ error: "Competency description BY sda and pl  not found" });
    }

    // Return the result
    return res.json(competencyDescription);
  } catch (error) {
    console.error(
      "Error retrieving competency description by sda and pl :",
      error
    );
    return res.status(500).json({
      error: "Failed to retrieve competency description by sda and pl ",
    });
  }
}

module.exports = {
  NewSaberCriteri,
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
  NewSabersDescription,
  getCompetencyDescriptionValById,
  getCriteriValById,
  getSabersDescriptionById,
  getSaberCriteriaById,
  toggleTreballat,
  getValBySdaPl,
};
