const router = require("express").Router();
const productController = require("../controllers/product");
// get all products
router.get("/", async (req, res) => {
  try {
    let result = await productController.getAllProducts();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//add product
router.post("/", async (req, res) => {
  try {
    let productReq = req.body;
    let productRes = await productController.addProduct(productReq);
    res.json(productRes);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// delete  product
router.delete("/:productId", async (req, res) => {
  try {
    let { productId } = req.params;
    let result = await productController.removeProduct(productId);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
