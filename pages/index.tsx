import Head from "next/head"
import Image from "next/image"
import invariant from "invariant"
import styles from "@/styles/Home.module.css"
import chooseResult from "../utils/choose"
import { Spirit, GameSetup } from "../types/index"
import { useState, useEffect } from "react"

export default function Home() {
  const [results, setResults] = useState<GameSetup>({})
  const [isLoading, setLoading] = useState(false)
  const [numberOfPlayers, setNumberOfPlayers] = useState(6)
  // const [includeBlightCard, setIncludeBlightCard] = useState(false)
  // const [includeAdversary, setIncludeAdversary] = useState(false)
  // const [includeScenario, setIncludeScenario] = useState(false)

  const updateNumberOfPlayers = (e: React.FormEvent<HTMLInputElement>) => {
    invariant(
      typeof parseInt(e.currentTarget.value) === "number",
      "value provided was not a number"
    )
    setNumberOfPlayers(parseInt(e.currentTarget.value))
  }

  const onSumbit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = e.target as EventTarget & {
      numberOfPlayers: { value: number }
      includeBlightCard: { checked: boolean }
      includeAdversary: { checked: boolean }
      includeScenario: { checked: boolean }
    }

    const response = await fetch(
      `/api/choose?numberOfPlayers=${data.numberOfPlayers.value}&includeBlightCard=${data.includeBlightCard.checked}&includeAdversary=${data.includeAdversary.checked}&includeScenario=${data.includeScenario.checked}`,
      { method: "GET" }
    )

    const result = await response.json()

    setResults(result)
  }

  if (isLoading) return <>Loading...</>

  return (
    <>
      <Head>
        <title>Spirit Island Game Randomizer</title>
        <meta name="description" content="Spirit Island Game Randomizer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Spirit Island Game Randomizer</h1>
        <h2>Settings</h2>
        <form onSubmit={onSumbit}>
          <label htmlFor="numberOfPlayers">Number of Players: </label>
          <input
            type="number"
            // min="1"
            max="6"
            value={numberOfPlayers}
            onChange={updateNumberOfPlayers}
            id="numberOfPlayers"
          />
          <br />
          <label htmlFor="includeBlightCard">Include Blight Card: </label>
          <input type="checkbox" id="includeBlightCard" />
          <br />
          <label htmlFor="includeAdversary">Include Adversary: </label>
          <input type="checkbox" id="includeAdversary" />
          <br />
          <label htmlFor="includeScenario">Include Scenario: </label>
          <input type="checkbox" id="includeScenario" />
          <br />
          <button type="submit">Submit</button>
        </form>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            {results.spirits && (
              <>
                <h2>Spirits</h2>
                <Spirits spirits={results.spirits} />
              </>
            )}
            {results.blightCard && (
              <>
                <h2>Blight</h2>
                <p>{results.blightCard.name}</p>
              </>
            )}
            {results.adversary && (
              <>
                <h2>Adversary</h2>
                <p>{results.adversary.name}</p>
              </>
            )}
            {results.scenario && (
              <>
                <h2>Scenario</h2>
                <p>{results.scenario.name}</p>
              </>
            )}
          </>
        )}
      </main>
    </>
  )
}

const Spirits = (args: { spirits: Spirit[] }) => {
  return (
    <ul>
      {args.spirits.map((spirit: Spirit) => {
        return (
          <li>
            {spirit.name}
            {spirit.aspect && <span> - Aspect: {spirit.aspect.name}</span>}
          </li>
        )
      })}
    </ul>
  )
}
