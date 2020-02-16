const router = require("express").Router();
const orderController = require("../controllers/order");
// get all orders for a user
router.get("/:userId", async (req, res) => {
  try {
    let { userId } = req.params;

    let result = await orderController.getAllOrdersForAUser(userId);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//create order
router.post("/:userId", async (req, res) => {
  try {
    let { userId } = req.params;
    let orderReq = req.body;
    let result = await orderController.createOrder(userId, orderReq);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// updating order
router.put("/:orderId", async (req, res) => {
  try {
    let { orderId } = req.params;
    let orderReq = req.body;
    let result = await orderController.updateOrder(orderId, orderReq);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
module.exports = router;
