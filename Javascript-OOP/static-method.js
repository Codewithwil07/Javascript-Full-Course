class MathUtil{
    static sum(...numbers){
        let total = 0
        for (const number of numbers) {
            total += number
        }
        return total
    }

    static kur(...numbers){

       if (numbers.length === null || numbers.length === undefined || numbers.length === 0) {
            throw new Error ("Total paramater harus lebih dari 0")
       }

        let total = 10
        for (const number of numbers) {
            total -= number
        }
        return total
    }
}

const math = MathUtil.kur()
console.log(math)
