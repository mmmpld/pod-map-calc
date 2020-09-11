<template>
  <v-app>
    <v-container fluid class="pt-0">
      <v-row>
        <v-col cols="12" lg="2" md="4" class="px-8 grey lighten-5 d-none d-md-block"></v-col>
        <v-divider vertical></v-divider>
        <v-col class="px-8">
          <h1>Path of Diablo Map Calculator</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="2" md="4" class="px-8 grey lighten-5">
          <v-form>
            <h3>Resistance Reduction</h3>
            <v-select
              v-model="convictionResistance"
              :items="convictionOptions"
              label="Conviction Level"
            ></v-select>
            <v-select
              v-model="lowerResResistance"
              :items="lowerResOptions"
              label="Lower Resistance Level"
            ></v-select>
            <v-select v-model="grimWardResistance" :items="grimWardOptions" label="Grim Ward Level"></v-select>
            <v-switch v-model="hasAmplifyDamage" label="Amplify Damage"></v-switch>
            <v-switch v-model="hasDecrepify" label="Decrepify"></v-switch>
            <v-text-field type="number" label="Cold Pierce %" v-model.number="coldPierce"></v-text-field>
            <v-text-field type="number" label="Fire Pierce %" v-model.number="firePierce"></v-text-field>
            <v-text-field type="number" label="Lightning Pierce %" v-model.number="lightningPierce"></v-text-field>
            <v-text-field type="number" label="Poison Pierce %" v-model.number="poisonPierce"></v-text-field>
            <h3>Additional Monster Resistance</h3>
            <v-text-field
              type="number"
              label="Map Cold Resist %"
              v-model.number="mapColdResistance"
              min="0"
            ></v-text-field>
            <v-text-field
              type="number"
              label="Map Fire Resist %"
              v-model.number="mapFireResistance"
              min="0"
            ></v-text-field>
            <v-text-field
              type="number"
              label="Map Lightning Resist %"
              v-model.number="mapLightningResistance"
              min="0"
            ></v-text-field>
            <v-text-field
              type="number"
              label="Map Physical Resist %"
              v-model.number="mapPhysicalResistance"
              min="0"
            ></v-text-field>
            <v-text-field
              type="number"
              label="Map Poison Resist %"
              v-model.number="mapPoisonResistance"
              min="0"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="px-8">
          <v-main>
            <MapRes
              v-for="(map, index) in maps"
              :key="index"
              :map-data="map"
              :conviction-resistance="convictionResistance"
              :lower-res-resistance="lowerResResistance"
              :grim-ward-resistance="grimWardResistance"
              :has-amplify-damage="hasAmplifyDamage"
              :has-decrepify="hasDecrepify"
              :cold-pierce="coldPierce"
              :fire-pierce="firePierce"
              :lightning-pierce="lightningPierce"
              :poison-pierce="poisonPierce"
              :map-cold-resistance="mapColdResistance"
              :map-fire-resistance="mapFireResistance"
              :map-lightning-resistance="mapLightningResistance"
              :map-magic-resistance="mapMagicResistance"
              :map-physical-resistance="mapPhysicalResistance"
              :map-poison-resistance="mapPoisonResistance"
            ></MapRes>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MapRes from "./components/MapRes";

let mobData = {
  blackRogue: {
    name: "Black Rogue",
    model: "Corrupt Rogue",
    cold: 140,
    fire: 33,
    lightning: 33,
    magic: 20,
    physical: 20,
    poison: 20,
  },
  bloodLord: {
    name: "Blood Lord",
    model: "Blood Lord",
    cold: 33,
    fire: 33,
    lightning: 33,
    magic: 33,
    physical: 100,
    poison: 33,
  },
  bloodTemptress: {
    name: "Blood Temptress",
    model: "Succubus",
    cold: 50,
    fire: 66,
    lightning: 50,
    magic: 0,
    physical: 25,
    poison: 120,
  },
  bloodWing: {
    name: "Blood Wing",
    model: "Giant Mosquito",
    cold: 0,
    fire: 0,
    lightning: 33,
    magic: 0,
    physical: 0,
    poison: 120,
  },
  blunderbore: {
    name: "Blunderbore",
    model: "Blunderbore",
    cold: 33,
    fire: 33,
    lightning: 33,
    magic: 0,
    physical: 75,
    poison: 0,
  },
  boneScarab: {
    name: "Bone Scarab",
    model: "Scarab Demon",
    cold: 0,
    fire: 0,
    lightning: 120,
    magic: 0,
    physical: 0,
    poison: 0,
  },
  burningDeadMage: {
    name: "Burning Dead Mage",
    model: "Skeleton Mage",
    cold: 50,
    fire: 130,
    lightning: 0,
    magic: 0,
    physical: 33,
    poison: 110,
  },
  bushBarb: {
    name: "Bush Barb",
    model: "Spike Fiend",
    cold: 50,
    fire: 0,
    lightning: 0,
    magic: 0,
    physical: 50,
    poison: 0,
  },
  cadaver: {
    name: "Cadaver",
    model: "Mummy",
    cold: 33,
    fire: 0,
    lightning: 33,
    magic: 0,
    physical: 50,
    poison: 110,
  },
  councilMember: {
    name: "Council Member",
    model: "Council Member",
    cold: 33,
    fire: 33,
    lightning: 100,
    magic: 0,
    physical: 50,
    poison: 33,
  },
  damned: {
    name: "Damned",
    model: "Tainted",
    cold: 0,
    fire: 0,
    lightning: 120,
    magic: 0,
    physical: 0,
    poison: 25,
  },
  darkShape: {
    name: "Dark Shape",
    model: "Wraith",
    cold: 80,
    fire: 0,
    lightning: 0,
    magic: 50,
    physical: 100,
    poison: 75,
  },
  deathClan: {
    name: "Death Clan",
    model: "Goatman",
    cold: 0,
    fire: 75,
    lightning: 0,
    magic: 50,
    physical: 50,
    poison: 0,
  },
  deathMauler: {
    name: "Death Mauler",
    model: "Death Mauler",
    cold: 50,
    fire: 50,
    lightning: 100,
    magic: 0,
    physical: 33,
    poison: 0,
  },
  demonSprite: {
    name: "Demon Sprite",
    model: "Demon Imp",
    cold: 33,
    fire: 120,
    lightning: 25,
    magic: 25,
    physical: 0,
    poison: 0,
  },
  doomKnight: {
    name: "Doom Knight",
    model: "Oblivion Knight",
    cold: 25,
    fire: 140,
    lightning: 25,
    magic: 0,
    physical: 33,
    poison: 50,
  },
  fanaticEnslaved: {
    name: "Fanatic Enslaved",
    model: "Suicide Minion",
    cold: 130,
    fire: 60,
    lightning: 15,
    magic: 0,
    physical: 25,
    poison: 15,
  },
  fiend: {
    name: "Fiend",
    model: "Bat Demon",
    cold: 33,
    fire: 33,
    lightning: 100,
    magic: 0,
    physical: 10,
    poison: 0,
  },
  fireTower: {
    name: "Fire Tower",
    model: "Fire Tower",
    cold: 85,
    fire: 99,
    lightning: 50,
    magic: 50,
    physical: 40,
    poison: 1000,
  },
  fleshLancer: {
    name: "Flesh Lancer",
    model: "Corrupt Rogue Spearwoman",
    cold: 130,
    fire: 25,
    lightning: 25,
    magic: 0,
    physical: 45,
    poison: 25,
  },
  flyingScimitar: {
    name: "Flying Scimitar",
    model: "Object",
    cold: 0,
    fire: 100,
    lightning: 100,
    magic: 0,
    physical: 25,
    poison: 0,
  },
  frozenScorch: {
    name: "Frozen Scorch",
    model: "Frozen Horror",
    cold: 190,
    fire: 0,
    lightning: 33,
    magic: 0,
    physical: 25,
    poison: 33,
  },
  hellBovine: {
    name: "Hell Bovine",
    model: "Hell Bovine",
    cold: 50,
    fire: 50,
    lightning: 50,
    magic: 33,
    physical: 50,
    poison: 33,
  },
  hellSpawn: {
    name: "Hell Spawn",
    model: "Baal's Minion",
    cold: 50,
    fire: 110,
    lightning: 25,
    magic: 0,
    physical: 33,
    poison: 0,
  },
  hellWhip: {
    name: "Hell Whip",
    model: "Overseer",
    cold: 160,
    fire: 33,
    lightning: 20,
    magic: 0,
    physical: 40,
    poison: 0,
  },
  hierophant: {
    name: "Hierophant",
    model: "Zakarum Priest",
    cold: 160,
    fire: 25,
    lightning: 33,
    magic: 0,
    physical: 10,
    poison: 20,
  },
  horadrimAncient: {
    name: "Horadrim Ancient",
    model: "Greater Mummy",
    cold: 50,
    fire: 50,
    lightning: 50,
    magic: 100,
    physical: 33,
    poison: 50,
  },
  horrorArcher: {
    name: "Horror Archer",
    model: "Skeleton Archer",
    cold: 66,
    fire: 66,
    lightning: 66,
    magic: 10,
    physical: 33,
    poison: 140,
  },
  horrorMage: {
    name: "Horror Mage",
    model: "Skeleton Mage",
    cold: 0,
    fire: 0,
    lightning: 115,
    magic: 0,
    physical: 33,
    poison: 0,
  },
  infidel: {
    name: "Infidel",
    model: "Sand Raider",
    cold: 110,
    fire: 5,
    lightning: 0,
    magic: 0,
    physical: 25,
    poison: 33,
  },
  mauler: {
    name: "Mauler",
    model: "Blunderbore",
    cold: 50,
    fire: 50,
    lightning: 100,
    magic: 0,
    physical: 55,
    poison: 0,
  },
  oblivionKnight: {
    name: "Oblivion Knight",
    model: "Oblivion Knight",
    cold: 150,
    fire: 60,
    lightning: 60,
    magic: 25,
    physical: 33,
    poison: 75,
  },
  pitLord: {
    name: "Pit Lord",
    model: "Mega Daemon",
    cold: 100,
    fire: 145,
    lightning: 100,
    magic: 100,
    physical: 50,
    poison: 145,
  },
  serpentMagus: {
    name: "Serpent Magus",
    model: "Claw Viper",
    cold: 120,
    fire: 33,
    lightning: 0,
    magic: 70,
    physical: 40,
    poison: 60,
  },
  slinger: {
    name: "Slinger",
    model: "Slinger",
    cold: 150,
    fire: 50,
    lightning: 15,
    magic: 0,
    physical: 25,
    poison: 15,
  },
  soulKiller: {
    name: "Soul Killer",
    model: "Fetish",
    cold: 25,
    fire: 105,
    lightning: 25,
    magic: 0,
    physical: 15,
    poison: 33,
  },
  spiderMagnus: {
    name: "Spider Magnus",
    model: "Gaint Spider",
    cold: 0,
    fire: 120,
    lightning: 0,
    magic: 0,
    physical: 50,
    poison: 65,
  },
  stormCaster: {
    name: "Storm Caster",
    model: "Finger Mage",
    cold: 25,
    fire: 66,
    lightning: 100,
    magic: 0,
    physical: 40,
    poison: 25,
  },
  templeGuard: {
    name: "Temple Guard",
    model: "Baboon Demon",
    cold: 33,
    fire: 0,
    lightning: 100,
    magic: 0,
    physical: 33,
    poison: 0,
  },
  theBanished: {
    name: "The Banished",
    model: "Vampire",
    cold: 150,
    fire: 33,
    lightning: 25,
    magic: 0,
    physical: 50,
    poison: 50,
  },
  unholyCorpse: {
    name: "Unholy Corpse",
    model: "Reanimated Horde",
    cold: 0,
    fire: 0,
    lightning: 0,
    magic: 50,
    physical: 50,
    poison: 120,
  },
  zealot: {
    name: "Zealot",
    model: "Zakarum Zealot",
    cold: 33,
    fire: 25,
    lightning: 100,
    magic: 0,
    physical: 10,
    poison: 20,
  },
};

export default {
  name: "App",
  components: {
    MapRes,
  },
  data: () => ({
    convictionResistance: 0,
    convictionOptions: [
      { value: 0, text: "none" },
      { value: -30, text: "1" },
      { value: -35, text: "2" },
      { value: -40, text: "3" },
      { value: -45, text: "4" },
      { value: -50, text: "5" },
      { value: -55, text: "6" },
      { value: -60, text: "7" },
      { value: -65, text: "8" },
      { value: -70, text: "9" },
      { value: -75, text: "10" },
      { value: -80, text: "11" },
      { value: -85, text: "12 (Infinity)" },
      { value: -90, text: "13" },
      { value: -95, text: "14" },
      { value: -100, text: "15" },
      { value: -105, text: "16" },
      { value: -110, text: "17" },
      { value: -115, text: "18" },
      { value: -120, text: "19" },
      { value: -125, text: "20" },
      { value: -130, text: "21" },
      { value: -135, text: "22" },
      { value: -140, text: "23" },
      { value: -145, text: "24" },
      { value: -150, text: "25" },
    ],
    lowerResResistance: 0,
    lowerResOptions: [
      { value: 0, text: "none" },
      { value: -52, text: "1" },
      { value: -61, text: "2" },
      { value: -68, text: "3" },
      { value: -75, text: "4" },
      { value: -80, text: "5" },
      { value: -84, text: "6" },
      { value: -87, text: "7" },
      { value: -89, text: "8" },
      { value: -92, text: "9" },
      { value: -94, text: "10" },
      { value: -96, text: "11" },
      { value: -98, text: "12" },
      { value: -100, text: "13" },
      { value: -101, text: "14" },
      { value: -102, text: "15" },
      { value: -104, text: "16" },
      { value: -104, text: "17" },
      { value: -105, text: "18" },
      { value: -106, text: "19" },
      { value: -107, text: "20" },
      { value: -108, text: "21" },
      { value: -109, text: "22" },
      { value: -110, text: "23" },
      { value: -111, text: "24" },
      { value: -112, text: "25" },
      { value: -113, text: "26" },
      { value: -114, text: "27" },
      { value: -115, text: "28" },
      { value: -116, text: "29" },
      { value: -117, text: "30" },
      { value: -118, text: "31" },
      { value: -119, text: "32" },
      { value: -120, text: "33" },
      { value: -121, text: "34" },
      { value: -122, text: "35" },
      { value: -123, text: "36" },
      { value: -124, text: "37" },
      { value: -125, text: "38" },
      { value: -126, text: "39" },
      { value: -127, text: "40" },
      { value: -128, text: "41" },
      { value: -129, text: "42" },
      { value: -130, text: "43" },
      { value: -131, text: "44" },
      { value: -132, text: "45" },
      { value: -133, text: "46" },
      { value: -134, text: "47" },
      { value: -135, text: "48" },
      { value: -136, text: "49" },
      { value: -137, text: "50" },
      { value: -138, text: "51" },
      { value: -139, text: "52" },
      { value: -140, text: "53" },
      { value: -141, text: "54" },
      { value: -142, text: "55" },
      { value: -143, text: "56" },
      { value: -144, text: "57" },
      { value: -145, text: "58" },
      { value: -146, text: "59" },
      { value: -147, text: "60" },
    ],
    grimWardResistance: 0,
    grimWardOptions: [
      { value: -10, text: "1" },
      { value: -12, text: "2" },
      { value: -14, text: "3" },
      { value: -16, text: "4" },
      { value: -18, text: "5" },
      { value: -20, text: "6" },
      { value: -22, text: "7" },
      { value: -24, text: "8" },
      { value: -26, text: "9" },
      { value: -28, text: "10" },
      { value: -30, text: "11" },
      { value: -32, text: "12" },
      { value: -34, text: "13" },
      { value: -36, text: "14" },
      { value: -38, text: "15" },
      { value: -40, text: "16" },
      { value: -42, text: "17" },
      { value: -44, text: "18" },
      { value: -46, text: "19" },
      { value: -48, text: "20" },
      { value: -50, text: "21" },
      { value: -52, text: "22" },
      { value: -54, text: "23" },
      { value: -56, text: "24" },
      { value: -58, text: "25" },
      { value: -60, text: "26" },
      { value: -62, text: "27" },
      { value: -64, text: "28" },
      { value: -66, text: "29" },
      { value: -68, text: "30" },
      { value: -70, text: "31" },
      { value: -72, text: "32" },
      { value: -74, text: "33" },
      { value: -76, text: "34" },
      { value: -78, text: "35" },
      { value: -80, text: "36" },
      { value: -82, text: "37" },
      { value: -84, text: "38" },
      { value: -86, text: "39" },
      { value: -88, text: "40" },
      { value: -90, text: "41" },
      { value: -92, text: "42" },
      { value: -94, text: "43" },
      { value: -96, text: "44" },
      { value: -98, text: "45" },
      { value: -100, text: "46" },
      { value: -102, text: "47" },
      { value: -104, text: "48" },
      { value: -106, text: "49" },
      { value: -108, text: "50" },
      { value: -110, text: "51" },
      { value: -112, text: "52" },
      { value: -114, text: "53" },
      { value: -116, text: "54" },
      { value: -118, text: "55" },
      { value: -120, text: "56" },
      { value: -122, text: "57" },
      { value: -124, text: "58" },
      { value: -126, text: "59" },
      { value: -128, text: "60" },
    ],
    hasAmplifyDamage: false,
    hasDecrepify: false,
    coldPierce: 0,
    firePierce: 0,
    lightningPierce: 0,
    poisonPierce: 0,
    mapColdResistance: 0,
    mapFireResistance: 0,
    mapLightningResistance: 0,
    mapMagicResistance: 0,
    mapPhysicalResistance: 0,
    mapPoisonResistance: 0,
    maps: [
      {
        title: "Icy Cavern",
        mobs: [
          mobData.bloodLord,
          mobData.templeGuard,
          mobData.unholyCorpse,
          mobData.demonSprite,
          mobData.bushBarb,
        ],
      },
      {
        title: "Frigid Plateau",
        mobs: [
          mobData.unholyCorpse,
          mobData.horrorArcher,
          mobData.doomKnight,
          mobData.oblivionKnight,
          mobData.blunderbore,
          mobData.deathMauler,
          mobData.fiend,
          mobData.stormCaster,
          mobData.templeGuard,
          mobData.zealot,
        ],
      },
      {
        title: "Dim Cellar",
        mobs: [
          mobData.blunderbore,
          mobData.spiderMagnus,
          mobData.deathMauler,
          mobData.fleshLancer,
          mobData.theBanished,
          mobData.soulKiller,
          mobData.bushBarb,
        ],
      },
      {
        title: "Musty Crypt",
        mobs: [
          mobData.bloodLord,
          mobData.templeGuard,
          mobData.unholyCorpse,
          mobData.demonSprite,
          mobData.frozenScorch,
          mobData.boneScarab,
          mobData.hellWhip,
          mobData.hellSpawn,
          mobData.slinger,
          mobData.fiend,
          mobData.fanaticEnslaved,
          mobData.flyingScimitar,
        ],
      },
      {
        title: "Desecrated Temple",
        mobs: [
          mobData.doomKnight,
          mobData.oblivionKnight,
          mobData.theBanished,
          mobData.frozenScorch,
          mobData.blunderbore,
          mobData.bloodWing,
          mobData.spiderMagnus,
          mobData.deathClan,
          mobData.stormCaster,
          mobData.demonSprite,
          mobData.bushBarb,
        ],
      },
      {
        title: "Ruined Citadel",
        mobs: [
          mobData.fleshLancer,
          mobData.bloodTemptress,
          mobData.serpentMagus,
          mobData.boneScarab,
          mobData.templeGuard,
          mobData.hierophant,
          mobData.zealot,
          mobData.darkShape,
          mobData.slinger,
          mobData.cadaver,
        ],
      },
      {
        title: "Forgotten Desert",
        mobs: [
          mobData.bloodWing,
          mobData.unholyCorpse,
          mobData.hellWhip,
          mobData.hellSpawn,
          mobData.stormCaster,
          mobData.councilMember,
          mobData.soulKiller,
          mobData.burningDeadMage,
          mobData.bloodLord,
          mobData.fireTower,
          mobData.bushBarb,
        ],
      },
      {
        title: "Burnt Forest",
        mobs: [
          mobData.pitLord,
          mobData.horrorArcher,
          mobData.templeGuard,
          mobData.mauler,
          mobData.horrorMage,
          mobData.blackRogue,
          mobData.horadrimAncient,
          mobData.infidel,
          mobData.damned,
        ],
      },
      {
        title: "Pleasant Pasture",
        mobs: [mobData.hellBovine],
      },
    ],
  }),
};
</script>
