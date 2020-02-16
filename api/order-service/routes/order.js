const router = require("express").Router();
const orderController = require("../controllers/order");
// get all orders for a user
router.get("/:userId", async (req, res) => {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
});
//create order
router.post("/:userId", async (req, res) => {});

// updating order
router.post("/:orderId", async (req, res) => {});
module.exports = router;
