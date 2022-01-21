class InvalidBody extends Error {
    constructor(erro) {
        super(`${erro}`)
        this.name = 'InvalidBody'
        this.idErro = 1
    }
}

module.exports = InvalidBody