class Person {
    sayHay(name){
        console.log(`Hai ${name}, my name is Person ${this.name}`)
    }
}

class Alien extends Person{
    sayHay(name){
        console.log(`Hai ${name}, my name is Alien ${this.name}`)
    }
}

const eko = new Person()
eko.name = "Eko"
eko.sayHay('Budi')

const ame = new Alien()
ame.name = "Ame"
ame.sayHay('Budi')

