const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});

//ex2
fs.writeFile("data.txt", "bla bla bla", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("It works!");
  }
});

fs.appendFile("./data.txt", "\nbla bla", (err) => {
  if (err) console.log(err);
});

fs.unlink("./data.txt", (err) => console.log(err));
