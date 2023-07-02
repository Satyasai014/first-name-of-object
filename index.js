let firstName = require("../country/state/city/index");
let mapFunction = require("../utilities/utils/index");
let getPeopleInCity = function (firstName) {
  return mapFunction(firstName);
};
console.log(getPeopleInCity(firstName));
module.exports = getPeopleInCity;
