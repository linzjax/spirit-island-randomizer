export type Spirit = { name: string; aspect?: { name: string } }
export type SpiritWithAspects = { name: string; aspects?: { name: string }[] }
export type Scenario = { name: string }
export type BlightCard = { name: string }
export type Adversary = { name: string }

export type GameSetup = {
  spirits: Spirit[]
  adversary?: Adversary
  scenario?: Scenario
  blightCard?: BlightCard
}

export type GameSetupOptions = {
  numberOfPlayers: number
  includeAdversary: boolean
  includeScenario: boolean
  includeBlightCard: boolean
}
