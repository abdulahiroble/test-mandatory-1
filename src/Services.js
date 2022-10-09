const People = require('./People')
// const list = require("../src/main")
const fs = require("fs");
let list = fs.readFileSync("./dump/person-names.json").toString()

//====READ FROM FILE====
function readFromFile(){
    let bufferData = fs.readFileSync(".././dump/person-names.json").toString();
    let data = JSON.parse(bufferData);

    return data;
}

//====ADD PEOPLE TO ARRAY====
function addPeopleToArray(data,numbers){
    let j = numbers;
    let peopleArray = [];

    let randomNumber;
    for (let i = 0; j > i; i++) {
        randomNumber = Math.floor(Math.random() * data.persons.length);
        peopleArray.push(data.persons[randomNumber])
    }
    return peopleArray;
}

//====GENERATE FEMALE CPR====
function generateFemaleCPR (){
    // Generate 5 Female last digets of CPR Numbers
    let randCPRFem = 1000;
    let randCPRFemArray = [];

    for (let i = 0; 5 > i; i++) {
        randCPRFem = randCPRFem + 2;
        randCPRFemArray.push(randCPRFem);
    }
    return randCPRFemArray;
}

//====GENERATE MALE CPR====
function generateMaleCPR(iterations){
    // Generate 5 Male last digets of CPR Numbers
    let randCPRMaleArray = [];

    for (let i = 0; iterations > i; i++) {

        //generated number is even
        let randNum = 1000 + Math.floor(Math.random() * 100);
        if (randNum % 2 == 0) {
            if (randNum == 5) {
                randNum = randNum - 1;
            } else {

                randNum = randNum + 1;
            }
        }
        randCPRMaleArray.push(randNum);
    }
    return randCPRMaleArray;
}

//====GENERATE PERSON INFO====
function generatePersonInfo(peopleArray){
    let tDate = randomDate(new Date(0, 1, 2012), new Date())
    let personArray = [];
    let randCPRMaleArray = generateMaleCPR(5);
    let randCPRFemArray = generateFemaleCPR();

    for (let i = 0; peopleArray.length > i; i++) {
        const person = new People(
            peopleArray[i].name, 
            peopleArray[i].surname,
            peopleArray[i].gender,
        );
        let date = person.getGender() == "male" ?
            tDate.toISOString().slice(0, 10).split("-").reverse().join().replace(/,/g, "") + randCPRMaleArray[i] 
        :
            tDate.toISOString().slice(0, 10).split("-").reverse().join().replace(/,/g, "") + randCPRFemArray[i];

        person.setCpr(date);
        person.setBirthday(person.getCpr().substring(0, 2) + "/" + person.getCpr().substring(2, 4) + "/" + person.getCpr().substring(4, 8))

        personArray.push(person);
    }
    return personArray
}

//====RANDOM DATE====
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getDate() - start.getDate()));
}



const functionsToReturn = {
    readFromFile,
    addPeopleToArray,
    generateFemaleCPR,
    generateMaleCPR,
    generatePersonInfo,
}

module.exports = functionsToReturn;