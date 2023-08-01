const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    console.log("URL is " + req.url);
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/index.html").pipe(res);
        break;
      case "/index.css":
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream("./public/Styles/index.css").pipe(res);
        break;
      case "/nav.js":
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fs.createReadStream("./public/Scripts/nav.js").pipe(res);
        break;
      case "/index.js":
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fs.createReadStream("./public/Scripts/index.js").pipe(res);
        break;
      case "/404":
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/HTML/404.html").pipe(res);
        break;
      case "/404.css":
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream("./public/Styles/404.css").pipe(res);
        break;
      default:
        console.log("Failed to load " + req.url);
    }
  }else{
    console.log("Failed to load the " + req.method + " from " + req.url);
  }
});



server.listen(3000, "localhost", () => {
  console.log("listening at http://localhost:3000");
});
