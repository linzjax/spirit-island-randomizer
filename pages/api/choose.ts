// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import invariant from "invariant"
import { GameSetupOptions, GameSetup } from "../../types/index"
import chooseResult from "../../utils/choose"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GameSetup>
) {
  invariant(req.url !== undefined, "need a request url")
  invariant(
    req.url.includes("numberOfPlayers"),
    "Need a number of players in request params."
  )
  const urlParams = new URLSearchParams(req.url.split("?")[1])

  const numberOfPlayers = urlParams.get("numberOfPlayers")

  invariant(
    numberOfPlayers !== null,
    "Need a number of players in request params."
  )

  const includeBlightCard = urlParams.get("includeBlightCard")
  const includeAdversary = urlParams.get("includeAdversary")
  const includeScenario = urlParams.get("includeScenario")

  invariant(includeBlightCard !== null, "Please include blight card in params.")
  invariant(includeAdversary !== null, "Please include adversary in params.")
  invariant(includeScenario !== null, "Please include scenario in params")

  const results = chooseResult({
    numberOfPlayers: parseInt(numberOfPlayers),
    includeBlightCard: includeBlightCard === "true",
    includeAdversary: includeAdversary === "true",
    includeScenario: includeScenario === "true"
  })

  res.status(200).json(results)
}
