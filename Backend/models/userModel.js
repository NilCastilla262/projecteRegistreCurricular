const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sql, poolPromise } = require("../config/db"); // Aquí importas 'sql' y 'poolPromise'


class User {
  constructor(id, username, email, password, type = "user") {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;  // Almacena el hash de la contraseña
    this.type = type;
  }

  // Método estático para crear un nuevo usuario (usando bcrypt para cifrar la contraseña)
  static async createUser(id, username, email, plainPassword, type = "user") {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);  // Hash de la contraseña
    return new User(id, username, email, hashedPassword, type);
  }

  // Método para comparar la contraseña proporcionada con el hash almacenado
  async comparePassword(plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  }

  // Método para generar un JWT
  static generateJWT(user) {
    const token = jwt.sign(
      { id: user.id, type: user.type },
      process.env.JWT_SECRET,  // Usa la clave secreta desde el archivo .env
      { expiresIn: "1h" }
    );
    return token;
  }

  // Método estático para obtener un usuario por su email desde la base de datos
  static async getUserByEmail(email) {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input("email", sql.VarChar, email)
        .query("SELECT * FROM UserTable WHERE email = @email");

      return result.recordset[0];  // Retorna el primer usuario encontrado
    } catch (error) {
      console.error("Error al consultar la base de datos:", error.message);
      throw error;
    }
  }
}

module.exports = User;
