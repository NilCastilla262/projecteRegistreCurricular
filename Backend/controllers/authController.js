const User = require("../models/userModel");

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

    // Simulating a "token" as a string (this is just an example and should not be used in production)
    const token = "simulated-token-" + user.id;

    // Respond with the "token" and user information
    res.status(200).json({ token, type: user.type, username: user.username });
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

module.exports = { login };
