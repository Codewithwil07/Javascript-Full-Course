class Counter{
    #counter = 0

    increment(){
        this.#counter++
    }

    get(){
        return this.#counter
    }

}

const counter = new Counter()
counter.increment()
counter.increment()

let result = counter.get()

console.log(result);