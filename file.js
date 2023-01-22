const fs = require("fs");

// fs.writeFileSync("read.txt", "welcome to channel ");
// fs.writeFileSync("read.txt", "welcome to channel  anish pokharel!");

fs.appendFileSync("read.txt", "how are you are you fine");
// fs.writeFileSync("rackvideo.txt", "15.31");

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

org_data = buf_data.toString();
console.log(org_data);

// const name = "anish";
// console.log(name);
