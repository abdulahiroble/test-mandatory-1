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
        return this.name, this.surname, this.gender
    }

    birthday() {
        return this.birthday
    }

    cprNumber() {
        return this.cpr
    }


}

const people = new People()

people.fullNameAndGender()
people.cprNumber()

module.exports = People;
