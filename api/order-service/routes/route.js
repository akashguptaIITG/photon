module.exports = app => {
  app.use("/api/orders", require("./order"));
};
