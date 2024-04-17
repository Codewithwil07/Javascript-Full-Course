class MathUtil{
    static sum(...numbers){

        if (numbers.length === 0) {
            throw new Error ("Total paramater harus lebih dari 0")
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
    console.info(MathUtil.sum())
    console.info("Wil")
} catch (error) {
    console.info("Terjadi Error:", error.message)
} finally {
    console.info(`Kode program selesai`)
}


console.info("jhaha")