const { Orders, OrderProducts } = require("../models/index");
const { Op } = require("sequelize");
async function getAllOrdersForAUser(userId) {
  try {
    let result = Orders.findAll({
      include: ["orderProducts"],
      where: {
        userId: {
          [Op.eq]: userId
        }
      }
    });
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateOrder(orderId, orderReq) {
  try {
    let { status } = orderReq;
    let result = await Orders.update(
      { status },
      {
        where: {
          id: {
            [Op.eq]: orderId
          }
        }
      }
    );
    let updatedOrder = await Orders.findOne({
      include: ["orderProducts"],
      where: {
        id: {
          [Op.eq]: orderId
        }
      }
    });

    console.log(result, updatedOrder.toJSON());
    return updatedOrder.toJSON();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function createOrder(userId, orderReq) {
  try {
    orderReq.userId = userId;
    let result = await Orders.create(orderReq);
    let { id } = result.toJSON();
    let { orderProducts } = orderReq;
    orderProducts = orderProducts.map(x => {
      x.orderId = id;
      return x;
    });
    await OrderProducts.bulkCreate(orderProducts);
    return result.toJSON();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
module.exports = {
  getAllOrdersForAUser,
  updateOrder,
  createOrder
};
