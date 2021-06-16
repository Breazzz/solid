// Dependency Inversion


class xmlHttpRequestService { }

// Low level
// class xmlHttpService extends xmlHttpRequestService {
//     request(url: string, type: string) { }
// }

// High level module
// class Http {
//     constructor(private xmlHttpService: xmlHttpService) { }

//     get(url: string, options: any) { 
//         this.xmlHttpService.request(url, 'GET')
//     }

//     post(url: string) {
//         this.xmlHttpService.request(url, 'POST')
//     }
// }

interface Connection {
    request(url: string, options: any): any 
}

class Http {
    constructor(private xmlHttpService: xmlHttpService) { }

    get(url: string, options: any) { 
        this.xmlHttpService.request(url, 'GET')
    }

    post(url: string) {
        this.xmlHttpService.request(url, 'POST')
    }
}

class xmlHttpRequestService {
    open() { }
    send() { }
}

interface Connection {
    request(url: string, options: any): any
}

class xmlHttpService implements Connection {
    xhr = new xmlHttpRequestService()

    request(url: string, type: string) {
        this.xhr.open()
        this.xhr.send()
    }
}