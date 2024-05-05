const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello contact!</h1>");
});

app.get("/files", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  //   res.send(path.join(__dirname, "index.html"));
});

app.get("/files1", (req, res) => {
  res.sendFile(path.join(__dirname, "example", "index.html"));
  //   res.send(path.join(__dirname, "index.html"));
  //example/index.html
});

app.get("/jsonexample", (req, res) => {
  res.send([
    { fname: "hello", lname: "sam" },
    { fname: "hello1", lname: "sam1" },
  ]);
});
app.listen(3000, () => {
  console.log("Server is running"); // Corrected typo in the log message
});
