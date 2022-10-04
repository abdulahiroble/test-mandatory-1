//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
var cors = require('cors')

app.use(cors())

class People {

    name
    surname
    gender

    constructor(name, surname, gender) {
        this.name = name
        this.surname = surname
        this.gender = gender
    }

    readJsonFile() {
        fs.readFile(__dirname + "/" + "person-names.json", 'utf8', function (err, data) {

            // // json object
            // const jsonData = '{ "name": "John", "age": 22 }';

            // // converting to JavaScript object
            // const obj = JSON.parse(jsonData);

            // accessing the data
            console.log(data.map((test) => test.name));

        });
    }

    fullNameAndGender(name, surname, gender) {
        return name, surname, gender
    }

}

const people = new People()

console.log(people.readJsonFile(1))

module.exports = People;