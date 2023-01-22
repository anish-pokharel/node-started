const fs = require("fs");

// fs.mkdirSync("thapa");
// fs.writeFileSync("thapa/bio.txt", "my name is anish pokharel ");

const data = fs.readFileSync("thapa/bio.txt", "utf-8");
console.log(data);
