const fs = require("fs");
const People = require('./People')

function readFromFile(name) {
    // this.name = name;
    let bufferData = fs.readFileSync("./dump/person-names.json").toString()
    // let stData = bufferData.toString()
    let data = JSON.parse(bufferData);

    // console.log(data.persons[0].name);

    // data.persons.foreach((elm, index)=>{

    // })

    // let arr = []
    let j = 5 
    let peopleArray= [];

    let randomNumber;
    for(let i = 0; j > i; i++){
        randomNumber = Math.floor(Math.random() * data.persons.length);
        // console.log(randomNumber)
        peopleArray.push(data.persons[randomNumber])
    }

    // console.log(Math.floor(Math.random() * 10000))

    // Generate 5 Female last digets of CPR Numbers
    let randCPRFem = 1000;
    let randCPRFemArray = [];

    for(let i = 0; 5 > i; i++){
        randCPRFem = randCPRFem + 2;
        randCPRFemArray.push(randCPRFem);
        // randCPRFemArray.push(tmpRandCPRFemArray[Math.floor(Math.random() * 5)])
    }

    // Generate 5 Male last digets of CPR Numbers
    let randCPRMaleArray = [];

    for(let i = 0; 5 > i; i++){

        //generated number is even
        let randNum = 1000 + Math.floor( Math.random() * 100); 
        if(randNum %2 == 0){
           if(randNum == 5){
            console.log("her")
            randNum  = randNum -1 ;
           }else{
            console.log("her2")

            randNum  = randNum +1 ;
           }
           console.log(randNum)
           
        }
        randCPRMaleArray.push(randNum);
    }
    // console.log("====",randCPRMaleArray)

    let tDate = randomDate(new Date(0, 1, 2012), new Date())
   
    personArray = [];
    for(let i = 0; peopleArray.length > i; i++){
        const person = new People();
        person.name = peopleArray[i].name;
        person.surname = peopleArray[i].surname;
        person.gender = peopleArray[i].gender;

        let date = person.gender == "male" ?  tDate.toISOString().slice(0,10).split("-").reverse().join().replace(/,/g, "")+randCPRMaleArray[i] : tDate.toISOString().slice(0,10).split("-").reverse().join().replace(/,/g, "")+randCPRFemArray[i];

        person.cpr = date;

        person.birthday = person.cpr.substring(0,2) + "/" + person.cpr.substring(2,4) + "/" + person.cpr.substring(4,8)

        personArray.push(person);
    }

    console.log(personArray);

    return true;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getDate() - start.getDate()));
}
readFromFile();