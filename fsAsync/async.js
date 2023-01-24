// const fs = require("fs");

// fs.writeFile(
//   "read.txt",
//   "today is awesome day 24 jan",

//   (err) => {
//     console.log("completed");
//     console.log(err);
//   }
// );

// fs.appendFile("read.txt", "hello i am anish", (err) => {
//   console.log("data completed");
//   console.log(err);
// });

// fs.readFile("fsAsync/read.txt", "utf-8", (err, data) => {
//   // console.log("read file");
//   console.log(data);

// });

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log(err);
// });
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);
