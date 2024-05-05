const http = require("http");
const fs = require("fs");
const url = require("url");
const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} New Req recived\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("file.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end("Hello " + username);
        //res.end("I am Piyushg Garg");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("here are your result for " + search);
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
//npm i url
//http://localhost:3000/about?myname=%22sam%27
//http://localhost:3000/about?myname=%27sam&userId=1
//http://localhost:3000/search?search_query=%27sam%27
