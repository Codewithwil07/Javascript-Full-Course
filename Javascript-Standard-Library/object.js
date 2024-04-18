// // object freeze dan seal

// const person = {
//     firstname: "willy",
//     lastname: "syahputra"
// }

// Object.seal(person)
// // Object.freeze(person)
// person.firstname = "wang" //tidak berubah
// delete person.firstname
// console.info(person)

// // object assign
// const target = {
//     firstname: 'wily',
// }
// const source = {
//     lastname: 'wang'
// }

// Object.assign(target, source)
// console.info(target)


// Object property name & values
const person = {
    firstname: "wil",
    lastname: 'wang'
}

console.info(Object.values(person))