const express = require("express");
const path = require("path");

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const replyRouter = require("./routes/replyRouter");

//set up app
const app = express();

// set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up static file service
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// middlewares
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/reply", replyRouter);

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Express App on port: " + PORT);
});
