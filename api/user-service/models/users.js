const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
const Users = db.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      values: ["customer", "delivery", "admin"],
      allowNull: false,
      defaultValue: "customer",
      validate: {
        isIn: [["customer", "delivery", "admin"]]
      }
    }
  },
  {
    freezeTableName: true
  }
);
module.exports = { Users };
