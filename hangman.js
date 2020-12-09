// Excersise
// method to make a guess
// 1. only accepts characters
// 2. should add unique geuessed to guessed letters array
// 3. should decrement the guesses Left if a unique guess isnt a match

const Hangman = function (word, possibleGuesses) {
  this.word = word.toLowerCase().split('')
  this.possibleGuesses = possibleGuesses
  this.guessedLetters = []
}


Hangman.prototype.makeGuess = function () {
  // 1. only accepts characters
  const guess = ''

  if (guess !== '') {
  console.log('Guess ignored. Type letters only.')

  } else {
    Hangman.prototype.getPuzzle = function () {
      let puzzle = ''

      this.word.forEach((letter) => {
        if ( this.guessedLetters.includes(letter) || letter === '') {
          puzzle += letter
          this.guessedLetters.push(letter)
        } else {
          puzzle += '*'
          this.possibleGuesses -= 1
        }
      })

      return puzzle
    }
  }
}

const game1 = new Hangman("playground", 5)
console.log(game1)
console.log(game1.getPuzzle())


const game2 = new Hangman('Kleiderschrank', 7)
console.log(game2)
console.log(game2.getPuzzle())
