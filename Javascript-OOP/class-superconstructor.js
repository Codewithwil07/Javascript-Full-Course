class Employe{

    constructor(firstname){
        this.firstname = firstname
    }

    sayHello(name){
        console.info(`Hello ${name}, my name is Employee ${this.firstname}`)
    }
}

class Manager extends Employe{

    constructor(firstname, lastname){
        super(firstname)
        this.lastname = lastname
    }

    sayHello(name){
        console.info(`Hello ${name}, my name is manager ${this.firstname} ${this.lastname}`)
    }
}

const eko = new Employe("Eko")
eko.sayHello("Budi")

const pang = new Manager("Paang", "Avatar")
pang.sayHello("Budi")