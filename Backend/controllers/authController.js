const SECRET_KEY = process.env.JWT_SECRET;

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = {
    email: req.body.email,
    password: req.body.password || req.body.Password, // Normalización
  };

  try {
    const user = await User.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    
    if (password.trim() !== user.Password.trim()) {
      console.log("Las contraseñas no coinciden");
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    
    const token = jwt.sign(
      { id: user.UUID, username: user.Username, type: "user" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
      username: user.Username,
      email: user.Email,
    });
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

module.exports = { login };

