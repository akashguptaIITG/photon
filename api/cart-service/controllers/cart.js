const { Carts } = require("../models/index");
const { Op } = require("sequelize");
async function getAllUserCartProducts(userId) {
  try {
    let result = await Carts.findAll({
      where: {
        userId: {
          [Op.eq]: userId
        }
      }
    });
    return result;
  } catch (err) {
    console.log(er);
    throw err;
  }
}

async function removeProductFromUserCart(userId, productId) {
  try {
    let result = await Carts.destroy({
      where: {
        userId: {
          [Op.eq]: userId
        },
        productId: {
          [Op.eq]: productId
        }
      }
    });
    return result;
  } catch (err) {
    console.log(er);
    throw err;
  }
}
async function addProductToUserCart(userId, productId, quantity) {
  try {
    let result = await Carts.create({ userId, productId, quantity });
    return result.toJSON();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function removeAllProductsFromUserCart(userId) {
  try {
    let result = await Carts.destroy({
      where: {
        userId: {
          [Op.eq]: userId
        }
      }
    });
    return result;
  } catch (err) {
    console.log(er);
    throw err;
  }
}

module.exports = {
  addProductToUserCart,
  removeProductFromUserCart,
  getAllUserCartProducts,
  removeAllProductsFromUserCart
};
