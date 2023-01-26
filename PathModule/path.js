const path = require("path");
// console.log(path.dirname("D:/node/PathModule/path.js"));
// console.log("ext name is :");
// console.log(path.extname("D:/node/PathModule/path.js"));
// console.log(path.basename("D:/node/PathModule/path.js"));
// console.log(path.parse("D:/node/PathModule/path.js"));

const myPath = path.parse("D:/node/PathModule/path.js");
console.log(myPath.root);
