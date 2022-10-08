const People = require('./People')
// const list = require("../src/main")
const fs = require("fs");
let list = fs.readFileSync("./dump/person-names.json").toString()

function generatePersons(){

    const person = new People();

    const personList = list.map((x) => {
        console.log("PERSONLIST",x)
        
    }
        // person.setName(x.name),
        // person.setSurname(x.surname),
        // person.setGender(x.gender),
        // person.setCpr(x.cpr),
        // person.setBirthday(x.birthday),
    )

    return personList;

}

const functionsToReturn = {
    generatePersons
}

module.exports = functionsToReturn;