// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function GetAllSabersDescription() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM SabersDescription_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

async function GetAllSaberCritaris() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM SaberCriteria_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  GetAllSabersDescription,
  GetAllSaberCritaris,
};
