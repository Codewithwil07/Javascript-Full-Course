class Person{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }

    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    
    set fullName(value){
        const res = value.split(" ")
        this.firstname = res[0]
        this.lastname = res[1]
    }
}

const eko = new Person("Eko", "Khannedy")
console.info(eko.fullName)


