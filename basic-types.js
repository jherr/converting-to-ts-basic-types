module.exports.isACat = (animal) => animal === "cat";

function addNumbers(a, b) {
  return a + b;
}

module.exports.addNumbers = addNumbers;

const introduction = (name) => `Hello ${name}`;

module.exports.introduction = introduction;

module.exports.introducePerson = (name) => console.log(introduction(name));

module.exports.dumpObject = (type, obj) => `${type}:${JSON.stringify(obj)}`;

module.exports.dumpStringOrNumber = (info) => `value ${info}`;
