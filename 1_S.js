// Single Responsibility


// class Auto {
//     constructor(model: string) { }
//     getCarModel( ) { }
//     saveCustomerOrder (o: Auto) { }
//     setCarModel( ) { }
//     getCustomerOrder (id: string) { }
//     removeCustomerOrder (id: string) { }
//     updateCarSet (set: object) { }
// }

class Auto {
    constructor(model: string) { }
    getCarModel( ) { }
    setCarModel( ) { } 
}

class CustomerAuto {
    saveCustomerOrder (o: Auto) { }
    setCarModel( ) { }
    getCustomerOrder (id: string) { }
}

class AutoDB {
    updateCarSet(set: object) { }
}