const Card = require('./Card')

class Deck {
  constructor () {
    this.suits = ['♥︎', '♣︎', '♠︎', '♦︎']
  }

  build () {
    const deck = new Set()

    for (let rank = 1; rank < 14; rank++)
      for (let suit of this.suits)
        deck.add(new Card(rank, suit))

    return deck
  }

  /**
   * Fisher-Yates Shuffle
   */
  shuffleArray (array) {
    let counter = array.length

    while (counter > 0) {
      // Pick random index & decrement counter
      const i = Math.floor(Math.random() * counter--)

      // Swap last element with index
      const temp = array[counter]
      array[counter] = array[i]
      array[i] = temp
    }

    return array
  }

  create (decks = 1) {
    let pile = []
    while (decks-- > 0) {
      pile = pile.concat([...this.build()])
    }
    return pile
  }

  shuffle (deck = this.create()) {
    return this.shuffleArray(deck)
  }
}

module.exports = Deck
