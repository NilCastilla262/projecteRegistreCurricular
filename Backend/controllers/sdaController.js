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
  console.log("chill bro ");

  const {
    curs,
    groupLetter,
    endDate,
    description,
    title,
    uuid_center,
    startDate,
  } = req.body;
  console.log("within controller : ");
  console.log(curs);
  console.log(groupLetter);
  console.log(endDate);
  console.log(description);
  console.log(title);
  console.log(uuid_center);
  console.log(startDate);

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

module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
};
