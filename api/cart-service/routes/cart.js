const router = require("express").Router();
const cartController = require("../controllers/cart");
// get all cart Products for a user
router.get("/:userId", async (req, res) => {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
});
//add product to a user cart
router.post("/:userId/:productId", async (req, res) => {});

// remove a product from user  cart
router.delete("/:userId/:productId", async (req, res) => {});

// remove all the products for user cart
router.delete("/:userId", async (req, res) => {});

module.exports = router;
