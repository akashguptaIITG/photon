const router = require("express").Router();
const cartController = require("../controllers/cart");

// get all cart Products for a user
router.get("/:userId", async (req, res) => {
  try {
    let { userId } = req.params;
    let result = await cartController.getAllUserCartProducts(userId);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//add product to a user cart
router.post("/:userId/:productId", async (req, res) => {
  try {
    let { userId, productId } = req.params;
    let { quantity } = req.body;
    let result = await cartController.addProductToUserCart(
      userId,
      productId,
      quantity
    );
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// remove a product from user  cart
router.delete("/:userId/:productId", async (req, res) => {
  try {
    let { userId, productId } = req.params;
    let result = await cartController.removeProductFromUserCart(
      userId,
      productId
    );
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// remove all the products for user cart
router.delete("/:userId", async (req, res) => {
  try {
    let { userId } = req.params;
    let result = await cartController.removeAllProductsFromUserCart(userId);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
