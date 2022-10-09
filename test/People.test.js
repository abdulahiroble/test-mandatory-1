const People = require("../src/People");
// const services = require("../src/services");
const list = require("../src/main")

const frank = new People("Frank", "Lorenzen", "male", "1234578911", "19/04/1996");
const jasmine = new People("jasmine", "Lorenzen", "male", "12345789100000", "19/04/1996");
const a = new People("a", "Lorenzen", "female","12345678910","09/04/1996" )

let cases = [[frank, true], [jasmine, false]]

describe('Validate CPR Length', () => {
    test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (obj, expectedResult) => {
            console.log(obj, expectedResult)
            const result = obj.getCpr().length == 10;
            expect(result).toEqual(expectedResult);
        }

    )
})

cases = [[a, 1, false],[a, 2, true],[a, 11, true],[a, 10, true], [a, 5, true], [a, 0, false]]

describe('Validate different name lengths', () => {
    test.each(cases)(
        "Given name length in person object between 2-10, return true",
        (obj, valueLength, expectedResult) => {
            console.log(obj, expectedResult)
            let result
            if(obj.getName().length > valueLength && valueLength < 2){
               result = false
            }else if(obj.getName().length >= valueLength && valueLength >= 11){
               result = false
            }else{
                result = true
            }
            expect(result).toEqual(expectedResult);
        }

    )
})


// test("Testing the class", ()=>{
//     const people = new People("name her", "surname her", "gender her", "cpr her", "birthday her");
//     // people.name = "HEJ"
//     console.log(people.getName())
// })

// test('Return a full name and gender', () => {
//     const people = new People()
//     // const peopleName = list.map((test) => people.name == test.name)
//     const peopleName = list.map((test) => console.log(test.name))

//     expect(people.fullNameAndGender(people.name)).toBe(peopleName)
// })

