const fs = require("fs");
const People = require('./People');
const {addPeopleToArray, generatePersonInfo } = require("./Services");

function main(){
   return generatePersonInfo(addPeopleToArray(5));
}

module.exports = main();
