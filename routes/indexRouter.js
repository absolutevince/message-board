const { Router } = require("express");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 0,
    replies: [],
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 1,
    replies: [],
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/view/:id", (req, res) => {
  const message = messages[Number(req.params.id)];
  res.render("viewMessage", {
    message: message.text,
    user: message.user,
    added: message.added,
    id: message.id,
    replies: message.replies,
  });
});

indexRouter.post("/reply/:id", (req, res) => {
  const { message, user } = req.body;
  messages[Number(req.params.id)].replies.push({
    text: message,
    user: user,
    added: new Date(),
    id: messages[Number(req.params.id)].replies.length,
  });

  res.redirect(`/view/${req.params.id}`);
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
    id: messages.length,
    replies: [],
  });
  res.redirect("/");
});

module.exports = indexRouter;
