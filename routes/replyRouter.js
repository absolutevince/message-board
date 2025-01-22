const { Router } = require("express");

const replyRouter = Router();

replyRouter.get("/:id", (req, res) => {
  res.render("replyForm", { id: req.params.id });
});

module.exports = replyRouter;
