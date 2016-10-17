class GameError extends Error {
  constructor (message) {
    super()
    this.name = 'Game Error'
    this.message = message
  }
}

module.exports = GameError
