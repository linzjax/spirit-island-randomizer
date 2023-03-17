import chooseResults from "./choose"

if (!process.argv.includes("--number-of-players")) {
  console.error(
    "\nPlease indicate the number of players by providing the flag: --number-of-players <number>\n"
  )
  process.exit(1)
}

const findArgumentValues: (flag: string) => string = (flag) => {
  return process.argv[process.argv.findIndex((arg) => arg === flag) + 1]
}

const findNumberOfPlayers: () => number = () => {
  // Find the index of --number-of-layers and select the next argument provided
  const numberOfPlayers = parseInt(findArgumentValues("--number-of-players"))

  if (isNaN(numberOfPlayers)) {
    console.error(
      `\nError: Number of players must be a number. Argument provided: ${findArgumentValues(
        "--number-of-players"
      )}: --number-of-players <number 1-6>\n`
    )
    process.exit(1)
  }

  if (numberOfPlayers < 1) {
    console.error(
      `\nError: You need at least 1 player to play. Don't be silly.\n`
    )
    process.exit(1)
  }

  if (numberOfPlayers > 6) {
    console.error(`\nError: Number of players cannot exceed 6.\n`)
    process.exit(1)
  }

  return numberOfPlayers
}

const includeArgument: (name: string) => boolean = (name) => {
  return !!process.argv.find((arg) => arg === `--include-${name}`)
}

console.log(
  chooseResults({
    numberOfPlayers: findNumberOfPlayers(),
    includeAdversary: includeArgument("adversary"),
    includeScenario: includeArgument("scenario"),
    includeBlightCard: includeArgument("blight")
  })
)
