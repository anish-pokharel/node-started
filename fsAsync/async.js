const fs = require("fs");

// fs.writeFile(
//   "read.txt",
//   "today is awesome day",

//   (err) => {
//     console.log("completed");
//     console.log(err);
//   }
// );

fs.appendFile("read.txt", "hello i am anish", (err) => {
  console.log("data completed");
  console.log(err);
});
