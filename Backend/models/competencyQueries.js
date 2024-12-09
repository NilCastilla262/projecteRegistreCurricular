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
    console.log(`
      INSERT INTO CompetencyDescription_Val (UUID, UUID_Sda, UUID_CompetencyDescription_Pl, Treballat)
      VALUES (NEWID(), '${uuidSda}', '${UUID_CompetencyDescriptionPl}', 0)
    `);
    const insertResult = await pool.request().query(`
      INSERT INTO CompetencyDescription_Val (UUID, UUID_Sda, UUID_CompetencyDescription_Pl, Treballat)
      VALUES (NEWID(), '${uuidSda}', '${UUID_CompetencyDescriptionPl}', 0)
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

async function NewSabersDescription(sdaNom, UUID_SabersDescriptionPl, res) {
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
      UUID_SabersDescriptionPl
    ); // Converting to UniqueIdentifier

    const insertResult = await pool
      .request()
      .input("UUID_Sda", sql.UniqueIdentifier, uuidSda)
      .input(
        "UUID_SabersDescription_Pl",
        sql.UniqueIdentifier,
        UUID_SabersDescriptionPl
      ).query(`
      INSERT INTO SabersDescription_Val (UUID, UUID_Sda, UUID_SabersDescription_Pl, Treballat)
      VALUES (NEWID(), @UUID_Sda, @UUID_SabersDescription_Pl, 0)
    `);

    res.status(201).json({
      message: "Competency Description Value inserted successfully",
      data: {
        sdaNom,
        UUID_SabersDescriptionPl,
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
/************************ */
/************************ */
/************************ */
/************************ */
/************************ */
/************************ */
/************************ */
async function NewSaberCriteri(sdaNom, UUID_SaberCriteriPl, res) {
  try {
    const pool = await poolPromise;

    // Retrieve the UUID from Sda_Val based on the provided sdaNom
    const plantillaResult = await pool
      .request()
      .input("sdaNom", sql.VarChar, `%${sdaNom}%`)
      .query("SELECT UUID FROM Sda_Val WHERE groupValue LIKE @sdaNom");

    // If no UUID is found, return a 404 response
    if (plantillaResult.recordset.length === 0) {
      return res
        .status(404)
        .json({ error: "No UUID_Sda found for the provided sda Name" });
    }

    const uuidSda = plantillaResult.recordset[0].UUID;

    // Insert the new Competency Description Value
    await pool
      .request()
      .input("UUID_Sda", sql.UniqueIdentifier, uuidSda)
      .input("UUID_SaberCriteriPl", sql.UniqueIdentifier, UUID_SaberCriteriPl)
      .query(`
        INSERT INTO SaberCriteria_Val (UUID, UUID_Sda, UUID_SaberCriteria_Pl, Treballat)
        VALUES (NEWID(), @UUID_Sda, @UUID_SaberCriteriPl, 0)
      `);

    // Return success response
    res.status(201).json({
      message: "saber criteri Value inserted successfully",
      data: {
        sdaNom,
        UUID_SaberCriteriPl,
        UUID_Sda: uuidSda,
        Treballat: false,
      },
    });
  } catch (error) {
    console.error("Query failed:", error.message);

    // Handle database or server errors
    res.status(500).json({
      error: "Failed to insert Competency Description Value",
      details: error.message,
    });
  }
}

/************************ */
/************************ */
/************************ */
/************************ */
/************************ */
/************************ */
/************************ */
async function NewCriteriVal(sdaNom, UUID_CriteriPl, res) {
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
    console.log(`
      INSERT INTO Criteria_Val (UUID, UUID_Sda, UUID_Criteria_Pl, Treballat)
      VALUES (NEWID(), '${uuidSda}', '${UUID_CriteriPl}', 0)
    `);
    const insertResult = await pool.request().query(`
      INSERT INTO Criteria_Val (UUID, UUID_Sda, UUID_Criteria_Pl, Treballat)
      VALUES (NEWID(), '${uuidSda}', '${UUID_CriteriPl}', 0)
    `);

    res.status(201).json({
      message: "Competency Description Value inserted successfully",
      data: {
        sdaNom,
        UUID_CriteriPl,
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
async function getCompetencyDescriptionValById(
  UUID_CompetencyDescription,
  res
) {
  try {
    const pool = await poolPromise;
    console.log("test ");
    const result = await pool
      .request()
      .query(
        `SELECT * FROM CompetencyDescription_Val where  uuid= '${UUID_CompetencyDescription}' `
      );
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getCriteriValById(UUID_Criteri, res) {
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .query(`SELECT * FROM Criteria_Val where  uuid= '${UUID_Criteri}' `);
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
  NewCriteriVal,
  NewSabersDescription,
  NewSaberCriteri,
  getCompetencyDescriptionValById,
  getCriteriValById,
};
