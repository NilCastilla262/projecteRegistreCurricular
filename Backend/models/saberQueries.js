// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function getAllSaberDescriptionsPl() {
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
async function getAllSaberDescriptionsVal() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM SabersDescription_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

async function getAllSaberCriteriaPl() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM SaberCriteria_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getAllSaberCriteriaVal() {
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
  getAllSaberDescriptionsPl,
  getAllSaberDescriptionsVal,
  getAllSaberCriteriaPl,
  getAllSaberCriteriaVal,
};
