import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import chooseResult from "../utils/choose"
import { useState, useEffect } from "react"

export default function Home() {
  const [results, setResults] = useState({})
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setResults(
      chooseResult({
        numberOfPlayers: 2,
        includeBlightCard: true,
        includeAdversary: true,
        includeScenario: true
      })
    )
    setLoading(false)
  }, {})

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
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <h2>Spirits</h2>
            <ul>
              {results.spirits &&
                results.spirits.map((spirit) => {
                  return (
                    <li>
                      {spirit.name}
                      {spirit.aspect && (
                        <span> - Aspect: {spirit.aspect.name}</span>
                      )}
                    </li>
                  )
                })}
            </ul>
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
