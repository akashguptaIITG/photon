const router = require("express").Router();
const orderController = require("../controllers/order");
// get all orders for a user
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    res.sendStatus(500);
  }
});
//add product
router.post("/", async (req, res) => {});

// delete  product
router.delete("/:productId", async (req, res) => {});

module.exports = router;
