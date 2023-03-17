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
      `\nNumber of players must be a... number. Not a ${typeof numberOfPlayers}: --number-of-players <number 1-6>\n`
    )
    process.exit(1)
  }

  if (numberOfPlayers > 6) {
    console.error(`\nNumber of players cannot exceed 6\n`)
    process.exit(1)
  }

  return numberOfPlayers
}

const includeAdversary: () => boolean = () => {
  return !!process.argv.find((arg) => arg === "--include-adversary")
}

const includeScenario: () => boolean = () => {
  return !!process.argv.find((arg) => arg === "--include-scenario")
}

console.log(
  chooseResults({
    numberOfPlayers: findNumberOfPlayers(),
    includeAdversary: includeAdversary(),
    includeScenario: includeScenario()
  })
)
