// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function getAllCriteriaPl() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Criteria_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

async function getAllCriteriaVal() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Criteria_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  getAllCriteriaPl,
  getAllCriteriaVal,
};
