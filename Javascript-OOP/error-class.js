class ValidationError extends Error{
    constructor(message, field){
        super(message)
        this.field = field
    }
}


class MathUtil{
    static sum(...numbers){

        if (numbers.length === 0) {
            throw new ValidationError ("Total paramater harus lebih dari 0")
       }

        let total = 0
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

// coba tangkap/try catch
try {   
    console.info(MathUtil.sum("1","2"))
} catch (error) {
    if(error instanceof ValidationError){   
        console.info(`Telah terjadi error di ${error.field} dengan error ${error.message}`)
    }else{
        console.info("Terjadi Error:", error.message)
    }
} finally {
    console.info(`Kode program selesai`)
}


console.info("wil")
