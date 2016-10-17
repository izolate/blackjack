class Player {
  constructor (name, dealer = false) {
    this.name = name
    this.isDealer = dealer
    this.history = new Map()
    this.round = 0
  }

  updateHand (round, hand) {
    this.round = round

    if (this.history.has(round)) {
      this.history.set(round, this.history.get(round).concat(hand))
    }
    else this.history.set(round, [ hand ])
  }

  get total () {
    const round = this.history.get(this.round)
    return round
  }
}

module.exports = Player
