function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
exports.add1 = (a, b) => a + b;
module.exports = {
  addFn: add,
  subFn: sub,
};
