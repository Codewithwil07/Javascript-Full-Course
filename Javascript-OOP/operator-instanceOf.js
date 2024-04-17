class Employee{

}

class Manager extends Employee{

}

const eko = new Employee()
const budi = new Manager()

console.info(eko instanceof Employee)
console.info(eko instanceof Manager)