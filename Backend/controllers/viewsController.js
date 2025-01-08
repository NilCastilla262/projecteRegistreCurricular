const viewsQueries = require("../models/viewsQueries");

async function getAllCompetencyDescriptionBySda(req, res) {
  const { UUID_Sda } = req.body;

  // Validate input
  if (!UUID_CompetencyDescription) {
    return res.status(400).json({
      error: "Missing required field: UUID_Sda",
    });
  }

  try {
    // Fetch competency description
    const competencyDescription =
      await competencyQueries.getCompetencyDescriptionValById(UUID_Sda);

    if (!competencyDescription) {
      return res
        .status(404)
        .json({ error: "Competency description not found" });
    }

    // Return the result
    return res.json(competencyDescription);
  } catch (error) {
    console.error("Error retrieving competency description by sda ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve competency description by sda ID" });
  }
}

module.exports = {
  getAllCompetencyDescriptionBySda,
};
