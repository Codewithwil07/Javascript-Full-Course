function Person(name, age) {
    this.name = name
    this.age = age
}

const willy = new Person("Willy", 20)
const Zhouye = new Person("Zhouye", 19)

Person.prototype.sayBay = function() {
    console.log("Goodbye")
}

willy.sayBay()
console.log(willy)
console.log(Zhouye)