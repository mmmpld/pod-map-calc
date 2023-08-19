/**
 * A temporary script for mapping our mobs to their internal d2 ids.
 */


/* eslint-disable quotes */
/* eslint-disable quote-props */
import { localeStringsEn as strings, monstats, superUniques as superuniques } from 'pod-data'
import mobs from '../src/assets/mobs.json' assert { type: "json" }

const mapMonsters = Object.entries(mobs)
// console.log('{')
for (const [key, value] of Object.entries(mapMonsters)) {
  if (Object.values(value)[1].id || Object.values(value)[1].class) {
    continue // skip monsters with existing ids or superunique class
  }
  const monsterFound = matchMonster(value)
  if (monsterFound) {
    const monsterFoundvalues = Object.values(monsterFound)
    const monsterFoundKey = monsterFoundvalues[0]
    const monsterFoundData = monsterFoundvalues[1]
    // console.log('"' + monsterFoundKey + '":')
    // console.log(monsterFoundData)
    // console.log(',')
  }
}
// console.log('}')

function matchMonster (monsterToFind) {
  const monsterToFindData = Object.values(monsterToFind)[1]
  // look for a superunique with this name
  const suId = findSuperunique(monsterToFindData.name)
  if (suId) {
    // found as a superunique
    monsterToFindData.class = suId // add id to original object
    return monsterToFind
  }
  // get potential monster names
  const monsterToFindNameStrings = findNameKey(monsterToFindData.name)
  if (monsterToFindNameStrings.length === 0) {
    console.log('no name key for ' + monsterToFindData.name)
  }
  const monsterToFindNameStringsJoined = monsterToFindNameStrings.join('/')
  console.log({ monsterToFindNameStringsJoined })
  
  const mons = []
  for (const [key, value] of Object.entries(monstats)) {
    mons.push(value)
  }
  
  const matchedMons = mons.filter(m => monsterToFindNameStrings.includes(m.NameStr))
  
  for (let index = 0; index < matchedMons.length; index++) {
    const matchedMon = matchedMons[index];
    const isMatchCold = monsterToFindData.cold === lookupMonsterResistance(matchedMon, 'cold')
    const isMatchFire = monsterToFindData.fire === lookupMonsterResistance(matchedMon, 'fire')
    const isMatchLightning = monsterToFindData.lightning === lookupMonsterResistance(matchedMon, 'lightning')
    const isMatchMagic = monsterToFindData.magic === lookupMonsterResistance(matchedMon, 'magic')
    const isMatchPhysical = monsterToFindData.physical === lookupMonsterResistance(matchedMon, 'physical')
    const isMatchPoison = monsterToFindData.poison === lookupMonsterResistance(matchedMon, 'poison')
    const isMatch = isMatchCold && isMatchFire && isMatchLightning && isMatchMagic && isMatchPhysical && isMatchPoison
    if (!isMatch) {
      // console.log(`${matchedMon.Id} was not a match for ${monsterToFindNameStringsJoined}`)
      // console.log({ isMatchCold, isMatchFire, isMatchLightning, isMatchMagic, isMatchPhysical, isMatchPoison })
      // console.log({ cold: monsterToFindData.cold, monRes: lookupMonsterResistance(matchedMon, 'cold') })
      // console.log({ fire: monsterToFindData.fire, monRes: lookupMonsterResistance(matchedMon, 'fire') })
      // console.log({ lightning: monsterToFindData.lightning, monRes: lookupMonsterResistance(matchedMon, 'lightning') })
      // console.log({ magic: monsterToFindData.magic, monRes: lookupMonsterResistance(matchedMon, 'magic') })
      // console.log({ physical: monsterToFindData.physical, monRes: lookupMonsterResistance(matchedMon, 'physical') })
      // console.log({ poison: monsterToFindData.poison, monRes: lookupMonsterResistance(matchedMon, 'poison') })
    } else {
      // console.log(`${matchedMon.Id} matched ${monsterToFindNameStr}`)
      monsterToFindData.id = matchedMon.Id // add id to original object
      console.info('match found for ' + monsterToFindNameStringsJoined + ` (${monsterToFindData.name} - ${matchedMon.Id})`)
      return monsterToFind
    }
  }
  console.warn('no match found for ' + monsterToFindNameStringsJoined + ` (${monsterToFindData.name})`)
  return monsterToFind
}

function findNameKey (monsterToFindName) {
  const nameKeys = []
  for (const [key, value] of Object.entries(strings)) {
    const string = value
    if (string === monsterToFindName) {
      nameKeys.push(key)
    }
  }
  return nameKeys
}

function findSuperunique (monsterToFindName) {
  for (const [key, value] of Object.entries(superuniques)) {
    const suData = value
    if (suData.Name === monsterToFindName) {
      return suData.Class
    }
  }
  return null
}

function lookupMonsterResistance (monster, resType) {
  let key
  switch (resType) {
    case 'cold':
      key = 'ResCo(H)'
      break;
    case 'fire':
      key = 'ResFi(H)'
      break;
    case 'lightning':
      key = 'ResLi(H)'
      break;
    case 'magic':
      key = 'ResMa(H)'
      break;
    case 'physical':
      key = 'ResDm(H)'
      break;
    case 'poison':
      key = 'ResPo(H)'
      break;
  }
  return (monster[key] ?? 0)
}
