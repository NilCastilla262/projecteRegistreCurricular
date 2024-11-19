const UsersQueries = require("../models/vectorsQueries");

async function getAllVectorsPl(req, res) {
  try {
    const criteries = await UsersQueries.getAllVectorsPl();
    res.json(criteries);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve vectors Pl" });
  }
}
async function getAllVectorsVal(req, res) {
  try {
    const criteries = await UsersQueries.getAllVectorsVal();
    res.json(criteries);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Vectors Val" });
  }
}
module.exports = {
  getAllVectorsPl,
  getAllVectorsVal,
};
