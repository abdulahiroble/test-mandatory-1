const fs = require("fs");

class People {

    name
    surname
    gender

    constructor(name, surname, gender) {
        this.name = name
        this.surname = surname
        this.gender = gender
    }

    readFromFile() {

        let bufferData = fs.readFileSync("./person-names.json")
        let stData = bufferData.toString()
        let data = JSON.parse(stData)

        console.log(data.persons.map((test) => test.name))

        return data

    }

    fullNameAndGender(name, surname, gender) {
        return name + surname + gender
    }

}

const people = new People()

people.readFromFile()

module.exports = People;