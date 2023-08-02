const express = require("express");
const path = require("path");

const app = express();
const PORT = 5050;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server at http://localhost:${PORT}`);
});
