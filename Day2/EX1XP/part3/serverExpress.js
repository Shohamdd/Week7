const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>This is an HTML tag</h1>");
});
app.listen(3000,() => console.log(`i am listening on 3000`));
