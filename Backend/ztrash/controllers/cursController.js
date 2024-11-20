const cursQueries = require("../models/cursQueries");

async function getAllCurs(req, res) {
  try {
    const curs = await cursQueries.getAllCurs();
    res.json(curs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve competencies" });
  }
}
module.exports = {
  getAllCurs,
};
