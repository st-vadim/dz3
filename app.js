const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");
const { cors } = require("./middlewares/cors");

const PORT = 3000;

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`App running in http://localhost:${PORT}`);
});
