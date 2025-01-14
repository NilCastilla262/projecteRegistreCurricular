const sdaQueries = require("../models/sdaQueries");

async function getAllSdas(req, res) {
  try {
    const sdas = await sdaQueries.getAllSdas();
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sdas  " });
  }
}

async function getSdaByGroupName(req, res) {
  const { groupValue } = req.query; // Use req.query for query parameters

  // Check if groupValue is provided
  if (!groupValue) {
    return res.status(400).json({ error: "Missing 'groupValue' parameter." });
  }

  try {
    const competencies = await sdaQueries.getSdaByGroupName(groupValue);
    res.json(competencies);
  } catch (error) {
    console.error("Error retrieving SDA by group name:", error.message);

    res.status(500).json({
      error: "Failed to retrieve SDA by group name.",
      details: error.message,
      groupValue,
    });
  }
}
async function newSda(req, res) {
  const {
    curs,
    groupLetter,
    endDate,
    description,
    title,
    uuid_center,
    startDate,
  } = req.body;

  if (
    !curs ||
    !endDate ||
    !startDate ||
    !title ||
    !uuid_center ||
    !description ||
    !groupLetter
  ) {
    return res.status(400).json({
      error:
        "Missing required fields:  curs, groupLetter,endDate,description,title,uuid_center,startDate,",
    });
  }
  try {
    const sdas = await sdaQueries.newSda(
      curs,
      groupLetter,
      endDate,
      description,
      title,
      uuid_center,
      startDate,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}

async function getSdasByUser(req, res) {
  const { UserName } = req.body; // Use req.query for query parameters
  // Check if groupValue is provided
  if (!UserName) {
    return res.status(400).json({ error: "Missing 'UserName' parameter." });
  }

  try {
    const sdas = await sdaQueries.getSdasByUser(UserName);
    res.json(sdas);
  } catch (error) {
    console.error("Error retrieving SDAs by user name:", error.message);

    res.status(500).json({
      error: "Failed to retrieve SDAs by user name.",
      details: error.message,
      UserName,
    });
  }
}

module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
  getSdasByUser,
};
