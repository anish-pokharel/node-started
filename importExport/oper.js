const add = (a, b) => {
  return a + b;
};

const name = "anish pokharel";

const sub = (a, b) => {
  return a - b;
};
const mult = (a, b) => {
  return a * b;
};
const divi = (a, b) => {
  return a / b;
};

// module.exports.divi1 = divi;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.name = name;

module.exports = { add, sub, mult, divi, name };
