// Liskov Substitution


class Rentangle {
    constructor(public width: number, public height: number) {}

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    areaOf(): number {
        return this.width * this.height
    }
}

// class Square extends Rentangle {
//     width: number = 0
//     height: number = 0

//     constructor(size: number) {
//         super(size, size)
//     }

//     setWidth(width: number) {
//         this.width = width
//         this.height = width
//     }

//     setHeight(height: number) {
//         this.width = height
//         this.height = height
//     }
// }

const mySquare = new Square(20)
mySquare.setWidth(30)
mySquare.setHeight(40)

// How it should works
const changeShapeSize = (figure: Rentangle): void => {
    figure.setWidth(10)
    figure.setHeight(20)
}

// How it works 
const changeShapeSize = (figure: Rentangle): void => {
    figure.setWidth(10)
    figure.setHeight(20)
}

interface Figure {
    setWidth(width: number): void
    setHeight(width: number): void
    areaOf(): void
}

class Rectangle implements Figure {
    setWidth(width: number) { }
    setHeight(width: number) { }
    areaOf() { }
}

class Square implements Figure {
    setWidth(width: number) { }
    setHeight(width: number) { }
    areaOf() { }
}