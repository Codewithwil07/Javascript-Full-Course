function Employee(firstName) {
    this,firstName = firstName
    this.sayHello = function(name){
        console.log(`Hai ${name}, Myname is ${firstName}`)
    } 
}

function Manager(firstName, lastName) {
    this.lastName = lastName
    Employee.call(this, firstName)
}

const wil = new Manager("Willy", "Syahputra")
console.log(wil)
