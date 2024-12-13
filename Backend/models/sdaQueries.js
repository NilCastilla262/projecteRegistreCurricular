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
  groupLetter,
  endDate,
  description,
  title,
  uuid_center,
  startDate,
  res
) {
  try {
    console.log(`SELECT UUID FROM Curs_Pl WHERE Curs LIKE  '%${curs}%' `);

    const pool = await poolPromise;

    const plantillaResult = await pool
      .request()
      .input("curs", sql.VarChar, curs)
      .query(`SELECT UUID FROM Curs_Pl WHERE Curs LIKE  '%${curs}%' `);
    console.log(" uuid curs  ", plantillaResult);

    let uuidCurs; // Declare in outer scope

    if (plantillaResult.recordset && plantillaResult.recordset.length > 0) {
      uuidCurs = plantillaResult.recordset[0].UUID; // Assign value
      console.log("Extracted UUID:", uuidCurs); // Correct variable name here
    } else {
      console.log("No records found.");
    }

    const uuidplantillaResult = await pool
      .request()
      .input("curs", sql.VarChar, uuidCurs)
      .query(
        `SELECT UUID FROM Plantilla_Pl WHERE UUID_Curs =  '${uuidCurs}' AND active=1 `
      );
    let uuidPlantilla = uuidplantillaResult.recordset[0].UUID;
    console.log(`
        INSERT INTO Sda_Val (UUID, UUID_Plantilla, GroupLetter , description , tittle ,UUID_Center ,active ,   startDate, endDate)
        VALUES (NEWID(), @uuidPlantilla, @groupLetter , @description ,@title , @uuid_center , 1 ,    @startDate, @endDate)
    `);

    const insertResult = await pool
      .request()
      .input("uuidPlantilla", sql.UniqueIdentifier, uuidPlantilla)
      .input("groupLetter", sql.VarChar, groupLetter)
      .input("uuid_center", sql.UniqueIdentifier, uuid_center)
      .input("description", sql.VarChar, description)
      .input("title", sql.VarChar, title)
      .input("startDate", sql.Date, startDate)
      .input("endDate", sql.Date, endDate).query(`
        INSERT INTO Sda_Val (UUID, UUID_Plantilla, GroupLetter , description , tittle ,UUID_Center ,active ,   startDate, endDate)
        VALUES (NEWID(), @uuidPlantilla, @groupLetter , @description ,@title , @uuid_center , 1 ,    @startDate, @endDate)
    `);

    console.log("created ");
    res.status(201).json({
      message: "SDA inserted successfully",
      data: {
        curs,
        groupLetter,
        endDate,
        description,
        title,
        uuid_center,
        startDate,
      },
    });
  } catch (error) {
    console.error("Query failed:", error.message);
    console.log("Query failed:", error.message);
    throw error;
  }
}
module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
};
