const People = require("../src/People")

test('Return a fake full name and gender', () => {
    const people = new People()
    // people.name = "Anna S."
    expect(people.readFromFile("Anna S.")).toBe("Anna S.")
})

