const groupTablesQueries = require("../models/groupTablesQueries");

async function getAllGroups(req, res) {
  try {
    const groups = await groupTablesQueries.getAllGroups();
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Groups" });
  }
}
module.exports = {
  getAllGroups,
};
