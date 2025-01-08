const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  // try {
    // Consulta el usuario en la base de datos
    const user = await User.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Compara la contraseña proporcionada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Genera un token JWT
    const token = User.generateJWT(user);

    // Responde con el token y la información del usuario
    res.status(200).json({ token, type: user.type, username: user.username });
  // } catch (error) {
  //   console.error("Error en el servidor:", error.message);
  //   res.status(500).json({ message: "Error en el servidor", error });
  // }
};

module.exports = { login };
