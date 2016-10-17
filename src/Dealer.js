const Deck = require('./Deck')
const Player = require('./Player')
const GameError = require('./GameError')

class Dealer extends Player {
  constructor () {
    super('dealer', true)
    this.deck = new Deck()
    this.pile = []
  }

  fillPile (decks = 1) {
    this.pile = this.deck.create(decks)
    this.pile = this.deck.shuffle(this.pile)
  }

  deal () {
    if (this.pile.length <= 0) throw new GameError('No cards left')
    return this.pile.shift()
  }
}

module.exports = Dealer
