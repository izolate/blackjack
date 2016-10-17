class Card {
  constructor (rank, suit) {
    this.rank = rank
    this.suit = suit
    this.value = (rank === 1 ? [1, 11] : Math.min(10, rank))
  }

  get name () {
    return [
      'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'
    ][this.value - 1]
  }

  get isFaceCard () {
    return (this.rank > 10 || this.rank === 1)
  }
}

module.exports = Card
