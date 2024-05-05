const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.end("Hello from home page");
});
app.get("/about", (req, res) => {
  return res.end(
    "Hello from about page" +
      " hey " +
      req.query.name +
      ", you are " +
      req.query.age
  );
});
app.listen(8000, () => console.log("server started"));

// const myserver = http.createServer(app);
// myserver.listen(3000, () => console.log("server started at port 3000"));
