const input = "1234"
const number = Number(input)

console.info(typeof input) // string
console.info(typeof number) //number
console.info(number) //1234

// Number static properties
console.info(Number.MAX_VALUE)
console.info(Number.MIN_VALUE)
console.info(Number.MIN_SAFE_INTEGER)
console.info(Number.MAX_SAFE_INTEGER)

// Number static method
const data = Number("12345")
console.info(Number.isInteger)
console.info(Number.isNaN)

// Number instance method
const instance = Number('12000')
console.info(instance.toLocaleString("id-ID"))