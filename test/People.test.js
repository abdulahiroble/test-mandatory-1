const People = require("../src/People");
const Services = require('../src/Services');
const list = require("../src/main")

const frank = new People("Frank", "Lorenzen", "male", Services.generateFullCPR("19/04/1996",Services.generateMaleCPR(1)), "19/04/1996",list);
const jasmine = new People("jasmine", "Lorenzen", "female", Services.generateFullCPR("19/04/1996", Services.generateFemaleCPR(1)), "19/04/1996");
const a = new People("a", "Lorenzen", "female", "12345678910", "09/04/1996");

let cases = [[frank, true], [jasmine, false]]

describe('Validate CPR Length', () => {
    test.each(cases)(
        "Validates each data for cpr length",
        (obj, expectedResult) => {
            const result = obj.getCpr().length == 10;
            expect(result).toEqual(expectedResult);
        }

    )
})

cases = [[frank, true], [a, false], [frank, true], [frank, true], [frank, true], [frank, true]]

describe('Validate different name lengths', () => {
    test.each(cases)(
        "Given name length in person object between 2-10, return true",
        (obj, expectedResult) => {
            let result

            if (obj.getName().length < 2) {
                result = false
            } else if (obj.getName().length > 10) {
                result = false
            } else {
                result = true
            }
            expect(result).toEqual(expectedResult);
        }

    )
})

