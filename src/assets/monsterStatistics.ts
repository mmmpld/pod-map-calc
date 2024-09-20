import { monstats, localeStringsEn, monLvl } from 'pod-data'

const difficulties = {
  normal: 'Normal',
  nightmare:'Nightmare',
  hell: 'Hell'
} as const
type Difficulties = typeof difficulties[keyof typeof difficulties]

const playerCount = [1, 2, 4, 5, 6, 7, 8] as const
type PlayerCount = typeof playerCount[number]

const monsterPromotion = {
  standard: 'Standard',
  berserker: 'Berserker',
  possessed: 'Possessed',
  champion: 'Champion',
  fanatic: 'Fanatic',
  ghostly: 'Ghostly',
  unique: 'Unique',
  superUnique: 'Super Unique',
  minion: 'Minion',
} as const
type MonsterPromotion = typeof monsterPromotion[keyof typeof monsterPromotion]

export const statisticsMap = new Map()
for (const [key, value] of Object.entries(monstats)) {
  const monsterValue = value as any
  statisticsMap.set(monsterValue.Id, value)
}

export function findName (nameStr) {
  for (const [key, value] of Object.entries(localeStringsEn)) {
    if (key === nameStr) {
      return value
    }
  }
  return nameStr // default to using the NameStr value when no translation is provided
}

/**
 * Calculate monster life
 * @see {@link https://www.theamazonbasin.com/wiki/index.php/Life#Monster}
 * @see {@link https://d2mods.info/forum/kb/viewarticle?a=360}
 */
export function calcLife (baseHp: number, mLvl: number, playerCount: PlayerCount, difficulty: Difficulties = difficulties.hell, monsterPromotionType: MonsterPromotion = monsterPromotion.standard, isSinglePlayer = false) {
  const monLvlValue = monLvl[mLvl][hpKey(difficulty, isSinglePlayer)] // get hp multiplier from table
  const life = Math.floor((monLvlValue * baseHp) / 100) // calc life for one player
  const playerModifier = 0.5 + (0.5 * playerCount) // 50% extra life is added per additional player
  return life * playerModifier * monsterPromotionLifeMultiplier(monsterPromotionType)
}

function hpKey (difficulty: Difficulties = difficulties.hell, singlePlayer: boolean = false) {
  if (singlePlayer) {
    switch (difficulty) {
      case difficulties.normal:
        return 'L-HP'
      case difficulties.nightmare:
        return 'L-HP(N)'
      case difficulties.hell:
      default:
        return 'L-HP(H)'
    }
  }
  switch (difficulty) {
    case difficulties.normal:
      return 'HP'
    case difficulties.nightmare:
      return 'HP(N)'
    case difficulties.hell:
    default:
      return 'HP(H)'
  }
}

function monsterPromotionLifeMultiplier (monsterPromotionType: MonsterPromotion = monsterPromotion.standard, difficulty: Difficulties = difficulties.hell) {
  if (difficulty === difficulties.normal) {
    switch (monsterPromotionType) {
      case monsterPromotion.unique:
      case monsterPromotion.superUnique:
        return 4
      case monsterPromotion.minion:
        return 2
      case monsterPromotion.possessed:
        return 6
      case monsterPromotion.berserker:
        return 0.75
      case monsterPromotion.champion:
      case monsterPromotion.fanatic:
      case monsterPromotion.ghostly:
        return 3
      case monsterPromotion.standard:
      default:
        return 1
    }
  } else if (difficulty === difficulties.nightmare) {
    switch (monsterPromotionType) {
      case monsterPromotion.unique:
      case monsterPromotion.superUnique:
        return 3
      case monsterPromotion.minion:
        return 1.75
      case monsterPromotion.possessed:
        return 5
      case monsterPromotion.berserker:
        return 0.625
      case monsterPromotion.champion:
      case monsterPromotion.fanatic:
      case monsterPromotion.ghostly:
        return 2.5
      case monsterPromotion.standard:
      default:
        return 1
    }
  } else if (difficulty === difficulties.hell) {
    switch (monsterPromotionType) {
      case monsterPromotion.unique:
      case monsterPromotion.superUnique:
        return 3
      case monsterPromotion.minion:
        return 1.5
      case monsterPromotion.possessed:
        return 4
      case monsterPromotion.berserker:
        return 0.5
      case monsterPromotion.champion:
      case monsterPromotion.fanatic:
      case monsterPromotion.ghostly:
        return 2
      case monsterPromotion.standard:
      default:
        return 1
    }
  }
  return 1
}
