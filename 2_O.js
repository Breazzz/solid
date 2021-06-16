// Open-Closed


// const shop: Array<Auto> = [
//     new Auto('Tesla'),
//     new Auto('Audi'),
//     new Auto('BMW'),
// ];

// const getPrice = (auto: Array<Auto>): string | void => {
//     for (let i = 0; i < auto.length; i++) {
//         switch (auto[i].model) {
//             case 'Tesla': return '80 000$';
//             case 'Audi': return '50 000$';
//             case 'BMW': return '70 000$';
//             default: return 'No auto price';
//         }
//     }
// }

abstract class CarPrice {
    abstract getPrice(): String;
}

class Tesla extends CarPrice {
    getPrice() {
        return '80 000$';
    }
}

class Audi extends CarPrice {
    getPrice() {
        return '50 000$';
    }
}

class Bmw extends CarPrice {
    getPrice() {
        return '70 000$';
    }
}

const shop: Array<CarPrice> = [
    new Tesla(),
    new Audi(),
    new Bmw(),
]

const getPRice = (auto: Array<CarPrice>): string | void => {
    for (let i = 0; i < auto.length; i++) {
        auto[i].getPrice()
    }
}

getPrice(shop)