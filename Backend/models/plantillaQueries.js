// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function getAllPlantilles() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Plantilla_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  getAllPlantilles,
};
