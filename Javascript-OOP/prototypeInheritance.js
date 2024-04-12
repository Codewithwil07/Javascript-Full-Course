function Employee(name){
    this.name = name
}
function Manager(name){
    this.name = name
}

Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.sayHello = function(name){
    console.log(`Hai ${name}, My Name is Manager ${this.name}`)
}
Employee.prototype.sayHello = function(name){
    console.log(`Hai ${name}, My Name is Manager ${this.name}`)
}

const eko = new Manager('Eko')
Manager.sayHello('Joko')

const budi = new Employee('Budi')
Employee.sayHello('Joko')
