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
  const {
    curs,
    uuid_group,
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
    !uuid_group
  ) {
    return res.status(400).json({
      error:
        "Missing required fields:  curs, uuid_group,endDate,description,title,uuid_center,startDate,",
    });
  }
  try {
    const sdas = await sdaQueries.newSda(
      curs,
      uuid_group,
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

module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
};
