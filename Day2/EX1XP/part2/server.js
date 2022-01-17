const http = require("http");

const user = {
  firstname: "John",
  lastname: "Doe",
};

const server = http
  .createServer((res, req) => {
    req.setHeader("Content-Type", "application/json");
    req.end(JSON.stringify(user));
  })
  .listen(8080, () => console.log("i am listening"));
