const {addPeopleToArray, generatePersonInfo } = require("./Services");

function main(){
   return generatePersonInfo(addPeopleToArray(5));
}

module.exports = main();
