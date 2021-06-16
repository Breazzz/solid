// Interface Segregation


interface AutoSet {
    getTeslaSet(): any
    getAudiSet(): any
    getBmwSet(): any
}

// class Tesla implements AutoSet {
//     getTeslaSet(): any { }
//     getAudiSet(): any { }
//     getBmwSet(): any { }
// }

// class Audi implements AutoSet {
//     getTeslaSet(): any { }
//     getAudiSet(): any { }
//     getBmwSet(): any { }
// }

// class Bmw implements AutoSet {
//     getTeslaSet(): any { }
//     getAudiSet(): any { }
//     getBmwSet(): any { }
// }

interface TeslaSet {
    getTeslaSet(): any
}

interface AudiSet {
    getAudiSet(): any
}

interface BmwSet {
    getBmwSet(): any
}

class Tesla implements TeslaSet {
    getTeslaSet(): any { }
}

class Audi implements TeslaSet {
    getAudiSet(): any { }
}

class Bmw implements TeslaSet {
    getBmwSet(): any { }
}