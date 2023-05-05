const chalk = require("chalk");
// console.log(chalk.red.inverse("failed"));
// console.log("hello");
// console.log(chalk.yellow.inverse("sucess"));
// console.log("hello");
// console.log(chalk.blue.inverse("pendig"));
// console.log(
//   chalk.blue("Hello") + " World" + chalk.red("anish ") + chalk.green("pokharel")
// );

var validator = require("validator");
const res = validator.isEmail("anish@anish.com"); //=> true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
var validator = require("validator");
const res = validator.isEmail("anish@anish.com"); //=> true
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
