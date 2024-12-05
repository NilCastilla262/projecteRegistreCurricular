// models/competencyQueries.js
const { poolPromise } = require("../config/db");
const sql = require("mssql");
async function getAllCompetencyDescriptionPlById(id) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(`SELECT * FROM CompetencyDescription_Pl where uuid= '${id}'`);
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function newCompetencyDescriptionVal(
  sdaNom,
  UUID_CompetencyDescriptionPl,
  res
) {
  try {
    const pool = await poolPromise;

    const plantillaResult = await pool
      .request()
      .input("sdaNom", sql.VarChar, `%${sdaNom}%`)
      .query("SELECT UUID FROM Sda_Val WHERE groupValue LIKE @sdaNom");

    if (plantillaResult.recordset.length === 0) {
      return res
        .status(404)
        .json({ error: "No UUID_SDA found for the provided sda Name" });
    }

    const uuidSda = plantillaResult.recordset[0].UUID;

    // Ensure UUID_CompetencyDescription_Pl is a valid GUID (or convert it if necessary)
    const validUuidCompetencyDescriptionPl = sql.UniqueIdentifier(
      UUID_CompetencyDescriptionPl
    ); // Converting to UniqueIdentifier

    const insertResult = await pool.request().query(`
      INSERT INTO CompetencyDescription_Val (UUID, UUID_Sda, UUID_CompetencyDescription_Pl, Treballat, UUID_CompetencyName)
      VALUES (NEWID(), '${uuidSda}', '${UUID_CompetencyDescriptionPl}', 0,NULL)
    `);

    res.status(201).json({
      message: "Competency Description Value inserted successfully",
      data: {
        sdaNom,
        UUID_CompetencyDescriptionPl,
        UUID_Sda: uuidSda,
        Treballat: false,
      },
    });
  } catch (error) {
    console.error("Query failed:", error.message);
    res
      .status(500)
      .json({ error: "Failed to insert Competency Description Value" });
  }
}

async function getAllCompetencyTypesPl() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM CompetencyType_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getAllCompetencyNamesPl() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM CompetencyName_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getAllCompetencyDescriptionsPl() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM CompetencyDescription_Pl");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

async function getAllCompetencyTypesVal() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM CompetencyType_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getAllCompetencyNamesVal() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM CompetencyName_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getAllCompetencyDescriptionsVal() {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("SELECT * FROM CompetencyDescription_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}

module.exports = {
  getAllCompetencyTypesPl,
  getAllCompetencyNamesPl,
  getAllCompetencyDescriptionsPl,
  getAllCompetencyTypesVal,
  getAllCompetencyNamesVal,
  getAllCompetencyDescriptionsVal,
  getAllCompetencyDescriptionPlById,
  newCompetencyDescriptionVal,
};
