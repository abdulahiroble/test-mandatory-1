const People = require("../src/People")
const list = require("../src/main")

test('Return a fake cpr', () => {
    const people = new People()
    const peopleCpr = list.map((test) => test.cpr)
    people.cpr = list.map((test) => test.cpr)
    expect(people.cprNumber(people.cpr)).toStrictEqual(peopleCpr)
})

test('Return a full name and gender', () => {
    const people = new People()
    // const peopleName = list.map((test) => people.name == test.name)
    const peopleName = list.map((test) => console.log(test.name))

    expect(people.fullNameAndGender(people.name)).toBe(peopleName)
})


