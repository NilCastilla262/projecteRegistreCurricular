// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function getAllCurs() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Curs_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  getAllCurs,
};
