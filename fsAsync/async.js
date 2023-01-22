const fs = require("fs");

fs.writeFile(
  "read.txt",
  "today is awesome day",

  (err) => {
    console.log("completed");
    console.log(err);
  }
);
