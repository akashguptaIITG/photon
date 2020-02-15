const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
const User = db.define(
  "User",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    PasswordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Role: {
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
module.exports = { User };
