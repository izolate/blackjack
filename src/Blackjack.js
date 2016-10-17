const Deck = require('./Deck')
const Player = require('./Player')
const Dealer = require('./Dealer')
const GameError = require('./GameError')

class Blackjack {
  constructor (decks) {
    this.round = 0

    // Create dealer
    this.dealer = new Dealer()
    this.players = new Set()
    this.players.add(this.dealer)
    this.dealer.fillPile(decks)
  }

  addPlayer (name, dealer = false) {
    for (let player of this.players) {
      if (player.name === name) throw new GameError('Player exists')
    }

    this.players.add(new Player(name, dealer))
  }

  dealCards (cards = 1) {
    if (this.players.length < 2) throw new GameError('Add a player')
    this.round++

    while (cards-- > 0) {
      for (let player of this.players) {
        if (!player.isDealer) {
          player.updateHand(this.round, this.dealer.deal())
        }
      }
      this.dealer.updateHand(this.round, this.dealer.deal())
    }
  }
}

module.exports = Blackjack
