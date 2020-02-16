const { Products } = require("../models/index");
const { Op } = require("sequelize");

async function addProduct(product) {
  try {
    let productRes = await Products.create(product);
    return productRes.toJSON();
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function removeProduct(productId) {
  try {
    let result = await Products.destroy({
      where: {
        id: {
          [Op.eq]: productId
        }
      }
    });
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function getAllProducts() {
  try {
    let productsRes = await Products.findAll();
    return productsRes;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
module.exports = {
  addProduct,
  removeProduct,
  getAllProducts
};
