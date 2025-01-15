const { sql, poolPromise } = require("../config/db"); // Import 'sql' and 'poolPromise'

class User {
  constructor(id, username, email, password, type = "user") {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password; // Se recomienda usar contraseñas hasheadas para producción.
    this.type = type;
  }

  // Método estático para obtener un usuario por email
  static async getUserByEmail(email) {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input("email", sql.VarChar, email)
        .query("SELECT * FROM UserTable WHERE email = @email");

      // Si no se encuentra el usuario, devolver null
      if (!result.recordset || result.recordset.length === 0) {
        return null;
      }

      // Retornar el primer usuario encontrado
      return result.recordset[0];
    } catch (error) {
      console.error("Error al consultar la base de datos:", error.message);
      throw new Error("Error interno al obtener el usuario.");
    }
  }
}

module.exports = User;
