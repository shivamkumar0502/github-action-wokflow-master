const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.send("Hello from Coder Army! Welcome back");
});

app.get("/bye", (req, res) => {
  res.send("Bye Bye!");
});

app.get("/hi", (req, res) => {
  res.send("I am saying Hi!");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
// CI test
