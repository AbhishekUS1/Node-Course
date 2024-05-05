const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}:New Req recived\n`;
  fs.appendFile("file.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("I am Piyushg Garg");
        break;
      default:
        //res.statusCode = 404;
        res.end(`Error 404 : ${req.url} not found`);
    }
  });
  // console.log(req.headers);
  // res.end("Hello from server");
});
myserver.listen(3000, () => console.log("server started at port 3000"));
//http://localhost:3000/
