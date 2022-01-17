const express = require("express");
const app = express();

app.listen(3000, () => console.log("listening on port 3000"));

app.get("/aboutMe/:hobby", (req, res) => {
  if (/^[A-Za-z]*$/.test(req.params.hobby)) {
    console.log(req.params);
    res.send(req.params);
  } else {
    res.status(404).send("Bad request!");
  }
});

app.get("/pic", (req, res) => {
  res.set("Content-Type", "image/jpg");
  res.sendFile(__dirname + "/success.jpg");
});
app.use('/',express.static(__dirname+'/public'));
app.get("/form", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("html")
  console.log(req.params);
});

app.get("/formData", (req, res) => {
  console.log(req.query);
  res.send(
    `${req.query.name} send you a msg please contact him on ${req.query.email}`
  );
});
