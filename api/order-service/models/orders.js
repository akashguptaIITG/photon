const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
const Orders = db.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        "pending",
        "approved",
        "placed",
        "shipped",
        "delivered",
        "undelivered",
        "cancelled"
      ],
      allowNull: false,
      defaultValue: "pending",
      validate: {
        isIn: [
          [
            "pending",
            "placed",
            "approved",
            "shipped",
            "delivered",
            "undelivered",
            "cancelled"
          ]
        ]
      }
    }
  },
  {
    freezeTableName: true
  }
);
module.exports = { Orders };
