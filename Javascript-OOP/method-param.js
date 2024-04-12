function Car(type, acceleration) {
    this.type = type
    this.acceleration = acceleration
    this.cuss = function(perasaan){
        console.log(`Mobil ${this.type} ini, ${perasaan} digunakan`)
    }
}

const porsche = new Car('matic', 200)
porsche.cuss('mudah')
console.log(porsche);
