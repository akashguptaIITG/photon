const router = require("express").Router();
const userController = require("../controllers/user");

router.post("/register", async (req, res) => {
  try {
    let { username = null, password = null, role = null } = req.body;
    let userRes = await userController.createUser({ username, password, role });
    delete userRes.passwordHash;
    res.json(userRes);
  } catch (err) {
    console.log("route:api/user/register: failed", err);
    res.sendStatus(500);
  }
});
router.get("/:userId", async (req, res) => {
  try {
    let result = await userController.getUserById(req.params.userId);
    res.json(result);
  } catch (err) {
    console.log("route:api/user/:userId: failed", err);
    res.sendStatus(500);
  }
});
router.get("/authenticate", async (req, res) => {});

router.post("/signin", async (req, res) => {});

module.exports = router;
