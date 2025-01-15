const viewsQueries = require("../models/viewsQueries");

async function GetViewSaberCriteriaVal(req, res) {
  const { UUID_Sda } = req.query; // Use req.query for GET parameters

  // Validate input
  if (!UUID_Sda) {
    return res.status(400).json({
      error: "Missing required field: UUID_Sda",
    });
  }
  try {
    const SaberCriteriaVal = await viewsQueries.GetViewSaberCriteriaVal(
      UUID_Sda
    );

    if (!SaberCriteriaVal) {
      return res.status(404).json({ error: "SaberCriteriaVal not found" });
    }

    // Return the result
    return res.json(SaberCriteriaVal);
  } catch (error) {
    console.error("Error retrieving SaberCriteriaVal by sda ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve SaberCriteriaVal by sda ID" });
  }
}

async function GetViewSabersDescriptionVal(req, res) {
  const { UUID_Sda } = req.query;

  // Validate input
  if (!UUID_Sda) {
    return res.status(400).json({
      error: "Missing required field: UUID_Sda",
    });
  }
  try {
    const SabersDescription = await viewsQueries.GetViewSabersDescriptionVal(
      UUID_Sda
    );

    if (!SabersDescription) {
      return res.status(404).json({ error: "SabersDescription not found" });
    }

    // Return the result
    return res.json(SabersDescription);
  } catch (error) {
    console.error("Error retrieving SabersDescription by sda ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve SabersDescription by sda ID" });
  }
}

async function GetViewCriteriaVal(req, res) {
  const { UUID_Sda } = req.query;

  // Validate input
  if (!UUID_Sda) {
    return res.status(400).json({
      error: "Missing required field: UUID_Sda",
    });
  }
  try {
    const ViewCriteriaVal = await viewsQueries.GetViewCriteriaVal(UUID_Sda);

    if (!ViewCriteriaVal) {
      return res.status(404).json({ error: "ViewCriteriaVal not found" });
    }

    // Return the result
    return res.json(ViewCriteriaVal);
  } catch (error) {
    console.error("Error retrieving ViewCriteriaVal by sda ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve ViewCriteriaVal by sda ID" });
  }
}

async function GetViewCompetencyDescriptionVal(req, res) {
  const { UUID_Sda } = req.query;

  console.log("sda test bro ", UUID_Sda);

  if (!UUID_Sda) {
    UUID_Sda = req.body;
  }

  // Validate input
  if (!UUID_Sda) {
    return res.status(400).json({
      error: "Missing required field: UUID_Sda",
    });
  }
  try {
    const CompetencyDescriptionVal =
      await viewsQueries.GetViewCompetencyDescriptionVal(UUID_Sda);

    if (!CompetencyDescriptionVal) {
      return res
        .status(404)
        .json({ error: "CompetencyDescriptionVal not found" });
    }

    // Return the result
    return res.json(CompetencyDescriptionVal);
  } catch (error) {
    console.error(
      "Error retrieving CompetencyDescriptionVal by sda ID:",
      error
    );
    return res
      .status(500)
      .json({ error: "Failed to retrieve CompetencyDescriptionVal by sda ID" });
  }
}

module.exports = {
  GetViewSaberCriteriaVal,
  GetViewSabersDescriptionVal,
  GetViewCriteriaVal,
  GetViewCompetencyDescriptionVal,
};
