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
  const { groupValue } = req.params;

  try {
    const competencies = await sdaQueries.getSdaByGroupName(groupValue);
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}

module.exports = {
  getAllSdas,
  getSdaByGroupName,
};
