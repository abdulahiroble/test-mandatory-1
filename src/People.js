const fs = require("fs");

class People {

    name
    surname
    gender
    cpr
    birthday

    constructor(name, surname, gender, cpr, birthday) {
        this.name = name
        this.surname = surname
        this.gender = gender
        this.cpr = cpr
        this.birthday = birthday
    }

    fullNameAndGender() {
        return this.name + this.surname + this.gender + this.cpr + this.birthday
    }

}

const people = new People()

// people.readFromFile()

module.exports = People;