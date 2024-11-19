// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function getAllVectorsPl() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Vectors_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getAllVectorsVal() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Vectors_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  getAllVectorsPl,
  getAllVectorsVal,
};
