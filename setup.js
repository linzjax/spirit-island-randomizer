const index = require('./index')

if (process.argv.length === 2) {
  console.error('Expected at least one argument!');
  process.exit(1);
}

if (!process.argv.includes('--number-of-players')) {
  console.error('\nPlease indicate the number of players by providing the flag: --number-of-players <number>\n')
  process.exit(1)
}

const findNumberOfPlayers = () => {
  // Find the index of --number-of-layers and select the next argument provided
  const numberOfPlayers = parseInt(process.argv[process.argv.findIndex((arg) => arg === '--number-of-players') + 1])

  if (isNaN(numberOfPlayers)) {
    console.error(`\nNumber of players must be a... number. Not a ${typeof(numberOfPlayers)}: --number-of-players <number>\n`)
    process.exit(1)
  }

  return numberOfPlayers
}

console.log(index.chooseResults({numberOfPlayers: findNumberOfPlayers()}))
