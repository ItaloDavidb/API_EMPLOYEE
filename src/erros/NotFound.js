class NotFound extends Error {
    constructor(service) {
        super(`${service} not found`)
        this.name = 'NotFound'
        this.idErro = 0
    }
}

module.exports = NotFound