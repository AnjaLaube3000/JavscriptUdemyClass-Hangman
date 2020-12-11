// Excersise
// 1.. display the puzzle to the browser instead to the console

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
console.log(game1.getPuzzle())
console.log(game1.possibleGuesses)


window.addEventListener('keypress', function (e){
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  console.log(game1.getPuzzle())
  console.log(game1.possibleGuesses)
})
