const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Use a secret key (ensure this is stored securely)
const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database for the user by email
    const user = await User.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Directly compare the provided password with the stored password (without hashing)
    if (password !== user.password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Generate a JWT
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        type: user.type,
      },
      SECRET_KEY,
      { expiresIn: "1h" } // Token expiration time
    );

    // Respond with the token and user information
    res.status(200).json({
      token,
      type: user.type,
      username: user.username,
    });
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

module.exports = { login };
