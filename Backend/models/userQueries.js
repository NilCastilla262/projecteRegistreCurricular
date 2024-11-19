// models/competencyQueries.js
const { poolPromise } = require("../config/db");

async function getAllUsers() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM UserTable");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  getAllUsers,
};
