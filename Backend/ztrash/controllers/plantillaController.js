const plantillaQueries = require("../models/plantillaQueries");

async function getAllPlantilles(req, res) {
  try {
    const plantilles = await plantillaQueries.getAllPlantilles();
    res.json(plantilles);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Plantilles" });
  }
}
module.exports = {
  getAllPlantilles,
};
