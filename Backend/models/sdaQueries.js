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
      .query(`SELECT * FROM Sda_Val WHERE tittle  LIKE '%${title}%'`);
    return result.recordset[0].UUID;
  } catch (error) {
    console.error("Query failed: getsdaBy GroupName", error.message);
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
    const pool = await poolPromise;

    const plantillaResult = await pool
      .request()
      .input("curs", sql.VarChar, curs)
      .query(`SELECT UUID FROM Curs_Pl WHERE Curs LIKE  '%${curs}%' `);

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
        INSERT INTO Sda_Val (UUID, UUID_Plantilla, UUID_Group , description , tittle ,UUID_Center ,active ,   startDate, endDate)
        VALUES (NEWID(), @uuidPlantilla, 'D4F7A1B8-6F3C-49B9-BA9E-8F1C5A2B9C8E' , @description ,@title , @uuid_center , 1 ,    @startDate, @endDate)
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

async function getSdasByUser(UserName) {
  try {
    const query = `
      SELECT s.* 
      FROM Sda_Val s 
      JOIN RelacioUserGroup r ON s.UUID_Group = r.UUID_Group 
      JOIN UserTable u ON r.UUID_User = u.UUID 
      WHERE u.Username = @UserName
    `;
    console.log("Executing query:", query);

    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("UserName", UserName) // Use parameterized query to prevent SQL injection
      .query(query);

    return result.recordset;
  } catch (error) {
    console.error("Query failed: getSdasByUser", error.message);
    throw error;
  }
}

module.exports = {
  getAllSdas,
  getSdaByGroupName,
  newSda,
  getSdasByUser,
};
