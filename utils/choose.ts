import {
  Spirit,
  SpiritWithAspects,
  Adversary,
  Scenario,
  BlightCard,
  GameSetup,
  GameSetupOptions
} from "../types/index"
import spiritJSON from "./spirits.json"

const chooseOption = (
  list: Array<SpiritWithAspects | Adversary | Scenario | BlightCard>
) => {
  return list.splice(Math.floor(Math.random() * list.length), 1)[0]
}

const chooseSpirits: (numberOfPlayers: number) => SpiritWithAspects[] = (
  numberOfPlayers
) => {
  let spirits = []
  let fullSpiritList = [...spiritJSON.spirits]
  for (let i = 0; i < numberOfPlayers; i++) {
    spirits.push(chooseOption(fullSpiritList))
  }
  return spirits
}

const adversaryList: Adversary[] = [
  {
    name: "Brandenburg-Prussia"
  },
  {
    name: "England"
  },
  {
    name: "Sweden"
  },
  {
    name: "Habsburg Monarchy"
  },
  {
    name: "Russia"
  }
]

const chooseAdversary: () => Adversary = () => chooseOption(adversaryList)

const scenarioList: Scenario[] = [
  {
    name: "Blitz"
  },
  {
    name: "Guard the Isle's Heart"
  },
  {
    name: "Rituals of Terror"
  },
  {
    name: "Dahan Insurrection"
  },
  {
    name: "Elemental Invocation"
  },
  {
    name: "Despicable Theft"
  },
  {
    name: "The Great River"
  }
]

const chooseScenario: () => Scenario = () => chooseOption(scenarioList)

const blightCardList: BlightCard[] = [
  {
    name: "Downward Spiral"
  },
  {
    name: "Memory Fades to Dust"
  },
  {
    name: "Thriving Communities"
  },
  {
    name: "Unnatural Proliferation"
  },
  {
    name: "All Things Weaken"
  },
  {
    name: "Power Corrodes the Spirit"
  },
  {
    name: "Untended Land Crumbles"
  },
  {
    name: "Invaders Find the Land to Their Liking"
  },
  {
    name: "Strong Earth Shatters Slowly"
  }
]

const chooseBlight: () => BlightCard = () => chooseOption(blightCardList)

const chooseResults: (args: GameSetupOptions) => GameSetup = ({
  numberOfPlayers,
  includeAdversary,
  includeScenario,
  includeBlightCard
}) => {
  const spirits = chooseSpirits(numberOfPlayers)
  console.log(spirits)

  const finalSpiritList = spirits.map((spirit: SpiritWithAspects) => {
    if (spirit.aspects) {
      const aspect = chooseOption(spirit.aspects)
      return {
        name: spirit.name,
        aspect: aspect
      }
    }

    return spirit
  })

  const results: GameSetup = {
    spirits: finalSpiritList
  }

  if (includeAdversary) {
    results["adversary"] = chooseAdversary()
  }

  if (includeScenario) {
    results["scenario"] = chooseScenario()
  }

  if (includeBlightCard) {
    results["blightCard"] = chooseBlight()
  }

  return results
}

export default chooseResults
