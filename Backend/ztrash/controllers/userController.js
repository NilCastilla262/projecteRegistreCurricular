const UsersQueries = require("../models/userQueries");

async function getAllUsers(req, res) {
  try {
    const criteries = await UsersQueries.getAllUsers();
    res.json(criteries);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve competencies" });
  }
}
module.exports = {
  getAllUsers,
};
