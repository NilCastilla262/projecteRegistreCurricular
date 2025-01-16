const { sql, poolPromise } = require("../config/db");

class User {
  constructor(id, username, email, password, type = "user") {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.type = type;
  }

  // Static method to get a user by their email from the database
  static async getUserByEmail(email) {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input("email", sql.VarChar, email)
        .query("SELECT * FROM UserTable WHERE email = @email");

      return result.recordset[0]; // Return the first user found
    } catch (error) {
      console.error("Error querying the database:", error.message);
      throw error;
    }
  }
}

module.exports = User;
