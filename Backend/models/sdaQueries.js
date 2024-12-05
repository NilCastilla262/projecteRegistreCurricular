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
async function getSdaByGroupName(groupName) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("groupName", sql.VarChar, `%${groupName}%`) // Safe parameterized query
      .query("SELECT * FROM Sda_Val WHERE groupValue LIKE @groupName");
    return result.recordset;
  } catch (error) {
    console.error("Query failed:", error.message);
    throw error;
  }
}
async function newSda(groupValue, yearValue, curs, res) {
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
      .input("groupValue", sql.VarChar, groupValue)
      .input("yearValue", sql.Int, yearValue).query(`
        INSERT INTO Sda_Val (UUID, UUID_Plantilla, groupValue, yearValue)
        VALUES (NEWID(), @uuidPlantilla, @groupValue, @yearValue)
    `);

    res.status(201).json({
      message: "SDA inserted successfully",
      data: { groupValue, yearValue, uuidPlantilla },
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
