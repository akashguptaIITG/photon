module.exports = app => {
  app.use("/api/carts", require("./cart"));
};
