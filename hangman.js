// Excersise
// method to make a guess
// 1. only accepts characters
// 2. should add unique guesses to guessed letters array
// 3. should decrement the guesses Left if a unique guess isnt a match

const Hangman = function (word, possibleGuesses) {
  this.word = word.toLowerCase().split('')
  this.possibleGuesses = possibleGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === '') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })
  // if (this.possibleGuesses > 0) {
  //   console.log(`Remaining guesses :${this.possibleGuesses}`)
  // } else {
  //   console.log('Game over!')
  // }

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {

  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUnique) {
    this.guessedLetters.push(guess)
  } else {
    console.log(`You already guessed ${guess}. Try again.`)
  }

  if (isUnique && isBadGuess) {
    this.possibleGuesses--
  }


}

const game1 = new Hangman("playground", 5)
game1.makeGuess('l')
game1.makeGuess('x')
game1.makeGuess('a')
console.log(game1.getPuzzle())
console.log(game1.possibleGuesses)


// const game2 = new Hangman('Kleiderschrank', 7)
// console.log(game2)
// console.log(game2.getPuzzle())
