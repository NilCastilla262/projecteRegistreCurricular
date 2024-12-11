const { poolPromise } = require("../config/db");
const sql = require("mssql");

async function getAllSdas() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Sda_Val");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function getSdaByGroupName(title) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("title", sql.VarChar, `%${title}%`) // Safe parameterized query
      .query("SELECT * FROM Sda_Val WHERE title  LIKE @title");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function newSda(
  curs,
  uuid_group,
  endDate,
  description,
  title,
  uuid_center,
  startDate,
  res
) {
  try {
    const pool = await poolPromise;

    const plantillaResult = await pool
      .request()
      .input("curs", sql.VarChar, curs)
      .query("SELECT UUID FROM plantilla_Pl WHERE Curs = @curs");

    if (plantillaResult.recordset.length === 0) {
      return res
        .status(404)
        .json({ error: "No UUID_Plantilla found for the provided Curs" });
    }

    const uuidPlantilla = plantillaResult.recordset[0].UUID;

    const insertResult = await pool
      .request()
      .input("uuidPlantilla", sql.UniqueIdentifier, uuidPlantilla)
      .input("uuid_group", sql.UniqueIdentifier, uuid_group)
      .input("uuid_center", sql.UniqueIdentifier, uuid_center)
      .input("description", sql.VarChar, description)
      .input("title", sql.VarChar, title)
      .input("startDate", sql.Date, startDate)
      .input("endDate", sql.Date, endDate).query(`
        INSERT INTO Sda_Val (UUID, UUID_Plantilla, UUID_Group , description , tittle ,UUID_Center ,active ,   startDate, endDate)
        VALUES (NEWID(), @uuidPlantilla, @uuid_group , @description ,@title , @uuid_center , 1 ,    @startDate, @endDate)
    `);

    res.status(201).json({
      message: "SDA inserted successfully",
      data: {
        curs,
        uuid_group,
        endDate,
        description,
        title,
        uuid_center,
        startDate,
      },
    });
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
};
