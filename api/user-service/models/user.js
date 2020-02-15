const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
db.define(
  "User",
  {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Password: {
      type: DataTypes.STRING
    },
    Role: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["customer", "staff", "admin"]
    }
  },
  {
    freezeTableName: true
  }
);
