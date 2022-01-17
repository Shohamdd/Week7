const express = require("express");

const app = express();

app.listen(3000, () => console.log("server running on port 3000"));

const user = {
  firstname: "John",
  lastname: "Doe",
};

app.get("/", (req, res) => {

res.send(JSON.stringify(user));
  console.log(user);
});

app.get("/:id", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});
