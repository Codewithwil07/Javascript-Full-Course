class Shape {
    paintOne(){
        console.info(`Paint Shape`)
    }
}

class Circle extends Shape{
    paintTwo(){
        super.paintOne()
        console.info(`Paint Circle`)
    }
}

const circle = new Circle()
circle.paintTwo()