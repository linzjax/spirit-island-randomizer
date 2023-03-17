import {
  Spirit,
  Adversary,
  Scenario,
  BlightCard,
  GameSetup,
  GameSetupOptions
} from "../types/index"

const chooseOption = (
  list: Array<Spirit | Adversary | Scenario | BlightCard>
) => {
  return list.splice(Math.floor(Math.random() * list.length), 1)[0]
}

const spiritList: Spirit[] = [
  {
    name: "Lightning's Swift Strike",
    aspects: [
      {
        name: "Standard"
      },
      {
        name: "Pandemonium"
      },
      {
        name: "Wind"
      }
    ]
  },
  {
    name: "River Surges in Sunlight",
    aspects: [
      {
        name: "Standard"
      },
      {
        name: "Sunshine"
      }
    ]
  },
  {
    name: "Vital Strength of the Earth",
    aspects: [
      {
        name: "Standard"
      },
      {
        name: "Resilience"
      }
    ]
  },
  {
    name: "Shadows Flicker Like Flame",
    aspects: [
      {
        name: "Standard"
      },
      {
        name: "Madness"
      },
      {
        name: "Reach"
      }
    ]
  },
  {
    name: "Thunderspeaker"
  },
  {
    name: "A Spread of Rampant Green"
  },
  {
    name: "Ocean's Hungry Grasp"
  },
  {
    name: "Bringer of Dreams and Nightmares"
  },
  {
    name: "Stone's Unyielding Defiance"
  },
  {
    name: "Shifting Memory of Ages"
  },
  {
    name: "Grinning Trickster Stirs Up Trouble"
  },
  {
    name: "Lure of the Deep Wilderness"
  },
  {
    name: "Many Minds Move as One"
  },
  {
    name: "Volcano Looming High"
  },
  {
    name: "Shroud of Silent Mist"
  },
  {
    name: "Vengeance as a Burning Plague"
  },
  {
    name: "Starlight Seeks Its Form"
  },
  {
    name: "Fractured Days Split the Sky"
  }
]

const chooseSpirits: (numberOfPlayers: number) => Spirit[] = (
  numberOfPlayers
) => {
  let spirits = []
  for (let i = 0; i < numberOfPlayers; i++) {
    spirits.push(chooseOption(spiritList))
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

  const finalSpiritList = spirits.map((spirit) => {
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