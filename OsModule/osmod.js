const os = require("os");

// console.log(os.arch());
const freeMemory = os.freeMemory();
console.log(freeMemory);
