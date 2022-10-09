const People = require("../src/People");
const Services = require('../src/Services');
const list = require("../src/main")

const frank = new People("Frank", "Lorenzen", "male", Services.generateMaleCPR(1), "19/04/1996",list);
const jasmine = new People("jasmine", "Lorenzen", "female", Services.generateFemaleCPR(1), "19/04/1996");
const a = new People("a", "Lorenzen", "female", "12345678910", "09/04/1996");

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

cases = [[a, 1, false], [a, 2, true], [a, 11, true], [a, 10, true], [a, 5, true], [a, 0, false]]

describe('Validate different name lengths', () => {
    test.each(cases)(
        "Given name length in person object between 2-10, return true",
        (obj, valueLength, expectedResult) => {
            console.log(obj, expectedResult)
            let result
            if (obj.getName().length >= valueLength && valueLength < 2) {
                result = false
            } else if (obj.getName().length >= valueLength && valueLength >= 11) {
                result = false
            } else {
                result = true
            }
            expect(result).toEqual(expectedResult);
        }

    )
})

