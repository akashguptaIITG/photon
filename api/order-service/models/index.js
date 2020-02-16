const { Orders } = require("./orders");
const { OrderProducts } = require("./order-products");
Orders.hasMany(OrderProducts, { as: "orderProducts", foreignKey: "orderId" });
OrderProducts.belongsTo(Orders, { as: "order" });

module.exports = {
  Orders,
  OrderProducts
};
