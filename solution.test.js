const User = require("./solution")
const tapSpec = require("tap-spec")
const test = require("tape")

tests = [
    new Date(1986, 0, 1), // month is zero-indexed.
    new Date(1988, new Date().getMonth(), new Date().getDate()),
    new Date(1990, 11, 30),
 ]

 
 
 test("User class outputs correct age", t => {
     t.plan(3)
     const ages = [34, 32, 29]
     tests.forEach((date, index) => {
         const result = new User("Test", date).age()
         const expected = ages[index];
         t.equal(result, expected, `Returned age should equal ${expected}`)
        })
    t.end()
})


test("User class should output correct birthday date", t => {
    t.plan(3)
    const birthdays = [new Date(2021, 0, 1), new Date(1988, new Date().getMonth(), new Date().getDate()), new Date(2020, 11, 30)]
    tests.forEach( (date, index) => {
        const result = new User("Test", date).next_birthday()
        const expected = birthdays[index];
        t.equal(result.toDateString, expected.toDateString, `${result} should be equal to ${expected}`)
    })
    t.end()
})
 
//  tests.forEach(date => console.log(`${date} => ` + new User("Test", date).next_birthday() + `\n`))