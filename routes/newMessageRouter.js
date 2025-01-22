const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.get("/reply/:id", (req, res) => {
  console.log("ran");
  res.render("replyForm", { id: req.params.id });
});

module.exports = newMessageRouter;
