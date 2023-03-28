module.exports = app => {
  const dates = require("../controllers/date.controller.js");

  const router = require("express").Router();

  router.post("/", dates.create);

  router.get("/", dates.findAllPublished);

  router.put("/:id", dates.update);

  app.use("/api/date", router);
};
