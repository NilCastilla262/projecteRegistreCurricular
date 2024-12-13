const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("UserTable", {
  UUID: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "UserTable",
  timestamps: false, // Asume que no hay columnas de createdAt/updatedAt
});


module.exports = User;
