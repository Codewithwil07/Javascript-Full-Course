// // Foreach
// const name = ['willy', 'syah', 'putra']

// name.forEach((value,index) => {
//     console.info(value + " " + index)
// });

// // array queque
// const queue = ['w', 's', 'p']
// queue.push('h') //[ 'w', 's', 'p', 'h' ]
// queue.shift() //['s', 'p', 'h' ]
// console.info(queue) 


// // array stack
// const stack = ['w', 's', 'p']
// stack.pop() //[ 'w', 's']
// console.info(stack) 

// // Array search
// const search = [1,2,3,4,5,1,2,3,4,5]
// console.info(search.find(value => value > 3)) //4
// console.info(search.findIndex(value => value > 3)) //3
// console.info(search.includes(7)) //false
// console.info(search.indexOf(3)) //4
// console.info(search.lastIndexOf(3)) //7

// // array filter
// const numbers = [1,2,3,4,5,6,7,8,9]
// console.info(numbers.filter(value => value % 2 === 0)) //[ 2, 4, 6, 8 ]

// array transform
const names = ["Willy", "Syahputra"]
console.info(names.map(value => value.toUpperCase()))
console.info(names.reduce((before, value) => before + " " + value))
console.info(names.reduceRight((before, value) => before + " " + value))

const numbers = [1, 2, 3, 4, 5]
console.info(numbers.reduce((result, value) => result + value))
console.info(numbers.reduceRight((result, value) => result + value))