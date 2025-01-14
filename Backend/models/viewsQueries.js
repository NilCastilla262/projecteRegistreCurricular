const { poolPromise } = require("../config/db");
const sql = require("mssql");
async function GetViewSaberCriteriaVal(UUID_SDA) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(
        `SELECT * from ViewSaberCriteriaVal where uuid_sda ='${UUID_SDA}'`
      );
    console.log(
      `SELECT * from ViewSaberCriteriaVal where uuid_sda ='${UUID_SDA}'`
    );
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function GetViewCriteriaVal(UUID_SDA) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(`SELECT * from ViewCriteriaVal where uuid_sda ='${UUID_SDA}'`);
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function GetViewCompetencyDescriptionVal(UUID_SDA) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(
        `SELECT * from ViewCompetencyDescriptionVal where uuid_sda ='${UUID_SDA}'`
      );
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function GetViewSabersDescriptionVal(UUID_SDA) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(
        `SELECT * from ViewSabersDescriptionVal where uuid_sda ='${UUID_SDA}'`
      );
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  GetViewSaberCriteriaVal,
  GetViewCriteriaVal,
  GetViewCompetencyDescriptionVal,
  GetViewSabersDescriptionVal,
};
