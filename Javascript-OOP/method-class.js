class Person{
    constructor(name){
        this.name = name
    }

    sayHai(name){
        console.info(`Hello ${name}, My name is ${this.name}`)
    }
}

const eko = new Person('Eko')
console.log(eko);
const method = eko.sayHai('Budi')
