const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Usa una clave secreta definida en las variables de entorno
const SECRET_KEY = process.env.JWT_SECRET || "default-secret-key"; // Cambiar en producción

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar que el email y contraseña hayan sido proporcionados
    if (!email || !password) {
      return res.status(400).json({ message: "Email y contraseña son requeridos." });
    }

    // Buscar el usuario por email
    const user = await User.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Comparar la contraseña proporcionada con la almacenada (sin hashing)
    if (password !== user.password) {
      return res.status(401).json({ message: "Contraseña incorrecta." });
    }

    // Generar un token JWT
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        type: user.type,
      },
      SECRET_KEY,
      { expiresIn: "1h" } // Tiempo de expiración del token
    );

    // Responder con el token y los datos del usuario
    res.status(200).json({
      token,
      type: user.type,
      username: user.username,
    });
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

module.exports = { login };
