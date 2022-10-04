const People = require("./People")

test('Return a fake full name and gender', () => {
    const people = new People()
    expect(people.fullNameAndGender("abdulahi mohamed male")).toBe("abdulahi mohamed male")
})

