const People = require("../src/People");
// const services = require("../src/services");
const list = require("../src/main")

const frank = new People("Frank", "Lorenzen", "male", "1234578911", "19/04/1996");
const jasmine = new People("jasmine", "Lorenzen", "male", "12345789100000", "19/04/1996");

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

describe('Validate CPR Length', () => {
    test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (obj, expectedResult) => {
            console.log(obj, expectedResult)
            const result = obj.getCpr().length == 0;
            expect(result).toEqual(expectedResult);
        }

    )
})

describe('Validate CPR Length', () => {
    test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (obj, expectedResult) => {
            console.log(obj, expectedResult)
            const result = obj.getCpr().length == 11;
            expect(result).toEqual(expectedResult);
        }

    )
})

describe('Validate CPR Length', () => {
    test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (obj, expectedResult) => {
            console.log(obj, expectedResult)
            const result = obj.getCpr().length == 11;
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

