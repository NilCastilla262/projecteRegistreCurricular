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
  const { groupValue } = req.body;
  console.log("grp " + groupValue);
  try {
    const competencies = await sdaQueries.getSdaByGroupName(groupValue);
    res.json(competencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}
async function newSda(req, res) {
  const { groupValue, yearValue, curs, endDate, startDate } = req.body;

  if (!groupValue || !yearValue || !curs || !endDate || !startDate) {
    return res.status(400).json({
      error:
        "Missing required fields: groupValue, yearValue, curs , startDate,endDate",
    });
  }
  try {
    const sdas = await sdaQueries.newSda(
      groupValue,
      yearValue,
      curs,
      startDate,
      endDate,
      res
    );
    res.json(sdas);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve sda by id  " });
  }
}

module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
};
