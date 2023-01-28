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

//create a server object:
// const http = require("http");
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Hello World!");
//     res.end();
//   })
//   .listen(8080);

// sync once completed and another
sync;
const fs = require("fs");
const data = fs.readFileSync("read.txt", "utf-8");
console.log(data);
console.log("after the data");

const fs = require("fs");

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(" data");
});
console.log("after the data");
