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
const http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
