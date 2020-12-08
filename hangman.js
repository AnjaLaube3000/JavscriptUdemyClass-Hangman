const Hangman = function (word, possibleGuesses) {
  this.word = word.toLowerCase().split('')
  this.possibleGuesses = possibleGuesses
  this.guessedLetters = ['a','s']
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    if ( this.guessedLetters.includes(letter) || letter === '') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })
  return puzzle
}

const game1 = new Hangman("playground", 5)
console.log(game1)
console.log(game1.getPuzzle())


const game2 = new Hangman('Kleiderschrank', 7)
console.log(game2)
console.log(game2.getPuzzle())
