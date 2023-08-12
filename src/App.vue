<template>
  <v-app>
    <v-container
      fluid
      class="pt-0"
    >
      <v-row>
        <v-col
          cols="12"
          lg="2"
          md="4"
          class="px-8 black d-none d-md-block"
        />
        <v-divider vertical />
        <v-col class="px-8">
          <h1>Path of Diablo Map Calculator</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          lg="2"
          md="4"
          class="px-8 black"
        >
          <v-form>
            <h3>Resistance Reduction</h3>
            <v-select
              v-model="convictionResistanceRaw"
              :items="convictionOptions"
              label="Conviction Level"
            />
            <v-select
              v-model="lowerResResistanceRaw"
              :items="lowerResOptions"
              label="Lower Resistance Level"
            />
            <v-select
              v-model="grimWardResistanceRaw"
              :items="grimWardOptions"
              label="Grim Ward Level"
            />
            <v-switch
              v-model="hasAmplifyDamage"
              label="Amplify Damage"
            />
            <v-switch
              v-model="hasDecrepify"
              label="Decrepify"
            />
            <v-text-field
              v-model.number="coldPierceRaw"
              type="number"
              label="Cold Pierce %"
            />
            <v-text-field
              v-model.number="lightningPierceRaw"
              type="number"
              label="Lightning Pierce %"
            />
            <v-text-field
              v-model.number="firePierceRaw"
              type="number"
              label="Fire Pierce %"
            />
            <v-text-field
              v-model.number="poisonPierceRaw"
              type="number"
              label="Poison Pierce %"
            />
            <h3>Additional Monster Resistance</h3>
            <v-text-field
              v-model.number="mapPhysicalResistanceRaw"
              type="number"
              label="Map Physical Resist %"
              min="0"
            />
            <v-text-field
              v-model.number="mapColdResistanceRaw"
              type="number"
              label="Map Cold Resist %"
              min="0"
            />
            <v-text-field
              v-model.number="mapLightningResistanceRaw"
              type="number"
              label="Map Lightning Resist %"
              min="0"
            />
            <v-text-field
              v-model.number="mapFireResistanceRaw"
              type="number"
              label="Map Fire Resist %"
              min="0"
            />
            <v-text-field
              v-model.number="mapPoisonResistanceRaw"
              type="number"
              label="Map Poison Resist %"
              min="0"
            />
          </v-form>
        </v-col>
        <v-divider vertical />
        <v-col class="px-8">
          <v-main>
            <v-tabs v-model="tab">
              <v-tab>Maps</v-tab>
              <v-tab>Farms</v-tab>
            </v-tabs>
            <v-tabs-items
              v-model="tab"
              class="pt-5"
            >
              <v-tab-item key="maps">
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
                  class="mb-8"
                />
              </v-tab-item>
              <v-tab-item key="farms">
                <MapRes
                  v-for="(map, index) in farms"
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
                  class="mb-8"
                />
              </v-tab-item>
            </v-tabs-items>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MapRes from './components/MapRes.vue'
import mobs from './assets/mobs.json'

export default {
  name: 'App',
  components: {
    MapRes
  },
  data: () => ({
    convictionResistanceRaw: parseInt(localStorage.convictionResistance) || null,
    convictionOptions: [
      { value: null, text: 'none' },
      { value: -30, text: '1' },
      { value: -35, text: '2' },
      { value: -40, text: '3' },
      { value: -45, text: '4' },
      { value: -50, text: '5' },
      { value: -55, text: '6' },
      { value: -60, text: '7' },
      { value: -65, text: '8' },
      { value: -70, text: '9' },
      { value: -75, text: '10' },
      { value: -80, text: '11' },
      { value: -85, text: '12 (Infinity)' },
      { value: -90, text: '13' },
      { value: -95, text: '14' },
      { value: -100, text: '15' },
      { value: -105, text: '16' },
      { value: -110, text: '17' },
      { value: -115, text: '18' },
      { value: -120, text: '19' },
      { value: -125, text: '20' },
      { value: -130, text: '21' },
      { value: -135, text: '22' },
      { value: -140, text: '23' },
      { value: -145, text: '24' },
      { value: -150, text: '25' }
    ],
    lowerResResistanceRaw: parseInt(localStorage.lowerResResistance) || null,
    lowerResOptions: [
      { value: null, text: 'none' },
      { value: -52, text: '1' },
      { value: -61, text: '2' },
      { value: -68, text: '3' },
      { value: -75, text: '4' },
      { value: -80, text: '5' },
      { value: -84, text: '6' },
      { value: -87, text: '7' },
      { value: -89, text: '8' },
      { value: -92, text: '9' },
      { value: -94, text: '10' },
      { value: -96, text: '11' },
      { value: -98, text: '12' },
      { value: -100, text: '13' },
      { value: -101, text: '14' },
      { value: -102, text: '15' },
      { value: -104, text: '16' },
      { value: -104, text: '17' },
      { value: -105, text: '18' },
      { value: -106, text: '19' },
      { value: -107, text: '20' },
      { value: -108, text: '21' },
      { value: -109, text: '22' },
      { value: -110, text: '23' },
      { value: -111, text: '24' },
      { value: -112, text: '25' },
      { value: -113, text: '26' },
      { value: -114, text: '27' },
      { value: -115, text: '28' },
      { value: -116, text: '29' },
      { value: -117, text: '30' },
      { value: -118, text: '31' },
      { value: -119, text: '32' },
      { value: -120, text: '33' },
      { value: -121, text: '34' },
      { value: -122, text: '35' },
      { value: -123, text: '36' },
      { value: -124, text: '37' },
      { value: -125, text: '38' },
      { value: -126, text: '39' },
      { value: -127, text: '40' },
      { value: -128, text: '41' },
      { value: -129, text: '42' },
      { value: -130, text: '43' },
      { value: -131, text: '44' },
      { value: -132, text: '45' },
      { value: -133, text: '46' },
      { value: -134, text: '47' },
      { value: -135, text: '48' },
      { value: -136, text: '49' },
      { value: -137, text: '50' },
      { value: -138, text: '51' },
      { value: -139, text: '52' },
      { value: -140, text: '53' },
      { value: -141, text: '54' },
      { value: -142, text: '55' },
      { value: -143, text: '56' },
      { value: -144, text: '57' },
      { value: -145, text: '58' },
      { value: -146, text: '59' },
      { value: -147, text: '60' }
    ],
    grimWardResistanceRaw: parseInt(localStorage.grimWardResistance) || null,
    grimWardOptions: [
      { value: null, text: 'none' },
      { value: -10, text: '1' },
      { value: -12, text: '2' },
      { value: -14, text: '3' },
      { value: -16, text: '4' },
      { value: -18, text: '5' },
      { value: -20, text: '6' },
      { value: -22, text: '7' },
      { value: -24, text: '8' },
      { value: -26, text: '9' },
      { value: -28, text: '10' },
      { value: -30, text: '11' },
      { value: -32, text: '12' },
      { value: -34, text: '13' },
      { value: -36, text: '14' },
      { value: -38, text: '15' },
      { value: -40, text: '16' },
      { value: -42, text: '17' },
      { value: -44, text: '18' },
      { value: -46, text: '19' },
      { value: -48, text: '20' },
      { value: -50, text: '21' },
      { value: -52, text: '22' },
      { value: -54, text: '23' },
      { value: -56, text: '24' },
      { value: -58, text: '25' },
      { value: -60, text: '26' },
      { value: -62, text: '27' },
      { value: -64, text: '28' },
      { value: -66, text: '29' },
      { value: -68, text: '30' },
      { value: -70, text: '31' },
      { value: -72, text: '32' },
      { value: -74, text: '33' },
      { value: -76, text: '34' },
      { value: -78, text: '35' },
      { value: -80, text: '36' },
      { value: -82, text: '37' },
      { value: -84, text: '38' },
      { value: -86, text: '39' },
      { value: -88, text: '40' },
      { value: -90, text: '41' },
      { value: -92, text: '42' },
      { value: -94, text: '43' },
      { value: -96, text: '44' },
      { value: -98, text: '45' },
      { value: -100, text: '46' },
      { value: -102, text: '47' },
      { value: -104, text: '48' },
      { value: -106, text: '49' },
      { value: -108, text: '50' },
      { value: -110, text: '51' },
      { value: -112, text: '52' },
      { value: -114, text: '53' },
      { value: -116, text: '54' },
      { value: -118, text: '55' },
      { value: -120, text: '56' },
      { value: -122, text: '57' },
      { value: -124, text: '58' },
      { value: -126, text: '59' },
      { value: -128, text: '60' }
    ],
    hasAmplifyDamage: localStorage.hasAmplifyDamage === 'true',
    hasDecrepify: localStorage.hasDecrepify === 'true',
    coldPierceRaw: parseInt(localStorage.coldPierce) || null,
    firePierceRaw: parseInt(localStorage.firePierce) || null,
    lightningPierceRaw: parseInt(localStorage.lightningPierce) || null,
    poisonPierceRaw: parseInt(localStorage.poisonPierce) || null,
    mapColdResistanceRaw: null,
    mapFireResistanceRaw: null,
    mapLightningResistanceRaw: null,
    mapMagicResistanceRaw: null,
    mapPhysicalResistanceRaw: null,
    mapPoisonResistanceRaw: null,
    tab: null,
    maps: [
      {
        title: 'Icy Cavern',
        mobs: [
          { data: mobs.bloodLord },
          { data: mobs.templeGuard },
          { data: mobs.unholyCorpse },
          { data: mobs.demonSprite },
          { data: mobs.bushBarb },
          {
            data: mobs.horror,
            note: 'boss area only'
          }
        ]
      },
      {
        title: 'Frigid Plateau',
        mobs: [
          { data: mobs.unholyCorpse },
          { data: mobs.horrorArcher },
          { data: mobs.doomKnightGuest },
          { data: mobs.oblivionKnightGuest },
          { data: mobs.blunderbore },
          { data: mobs.deathMauler },
          { data: mobs.fiend },
          { data: mobs.stormCaster },
          { data: mobs.templeGuard },
          { data: mobs.zealot }
        ]
      },
      {
        title: 'Dim Cellar',
        mobs: [
          { data: mobs.blunderbore },
          { data: mobs.spiderMagnus },
          { data: mobs.deathMauler },
          { data: mobs.fleshLancer },
          { data: mobs.theBanished },
          { data: mobs.soulKiller },
          { data: mobs.bushBarb },
          { data: mobs.bloodWing }
        ]
      },
      {
        title: 'Musty Crypt',
        mobs: [
          { data: mobs.bloodLord },
          { data: mobs.templeGuard },
          { data: mobs.demonSprite },
          { data: mobs.frozenScorch },
          { data: mobs.boneScarab },
          { data: mobs.hellWhip },
          { data: mobs.hellSpawn },
          { data: mobs.slinger },
          { data: mobs.fiend },
          { data: mobs.fanaticEnslaved },
          { data: mobs.flyingScimitar }
        ]
      },
      {
        title: 'Desecrated Temple',
        mobs: [
          { data: mobs.doomKnightGuest },
          { data: mobs.oblivionKnightGuest },
          { data: mobs.theBanished },
          { data: mobs.frozenScorch },
          { data: mobs.blunderbore },
          { data: mobs.bloodWing },
          { data: mobs.spiderMagnus },
          { data: mobs.deathClan },
          { data: mobs.stormCaster },
          { data: mobs.demonSprite },
          { data: mobs.bushBarb }
        ]
      },
      {
        title: 'Ruined Citadel',
        mobs: [
          { data: mobs.fleshLancer },
          { data: mobs.bloodTemptress },
          { data: mobs.serpentMagus },
          { data: mobs.boneScarab },
          { data: mobs.templeGuard },
          { data: mobs.hierophant },
          { data: mobs.zealot },
          { data: mobs.darkShape },
          { data: mobs.slinger },
          { data: mobs.cadaver }
        ]
      },
      {
        title: 'Forgotten Desert',
        mobs: [
          { data: mobs.bloodWing },
          { data: mobs.unholyCorpse },
          { data: mobs.hellWhip },
          { data: mobs.hellSpawn },
          { data: mobs.stormCaster },
          { data: mobs.councilMember },
          { data: mobs.soulKiller },
          { data: mobs.burningDeadMage },
          { data: mobs.bloodLord },
          {
            data: mobs.fireTower,
            note: 'static'
          },
          { data: mobs.bushBarb }
        ]
      },
      {
        title: 'Burnt Forest',
        mobs: [
          { data: mobs.pitLord },
          { data: mobs.horrorArcher },
          { data: mobs.templeGuard },
          { data: mobs.mauler },
          { data: mobs.horrorMage },
          { data: mobs.blackRogue },
          { data: mobs.horadrimAncient },
          { data: mobs.infidel },
          { data: mobs.damned },
          { data: mobs.horror }
        ]
      },
      {
        title: 'Pleasant Pasture',
        mobs: [
          { data: mobs.hellBovine }
        ]
      }
    ],
    farms: [
      {
        title: 'Chaos Sanctuary',
        mobs: [
          { data: mobs.doomKnight },
          { data: mobs.oblivionKnight },
          { data: mobs.stormCaster },
          { data: mobs.venomLord },
          { data: mobs.grandVizierOfChaos },
          { data: mobs.infectorOfSouls },
          { data: mobs.lordDeSeis },
          { data: mobs.diablo }
        ]
      },
      {
        title: 'The Pit',
        mobs: [
          { data: mobs.boneWarrior },
          { data: mobs.darkArcher },
          { data: mobs.darkStalker },
          { data: mobs.devilkin }
        ]
      },
      {
        title: 'The Countess',
        mobs: [
          { data: mobs.bloodClan },
          { data: mobs.darkArcher },
          { data: mobs.devilkin },
          { data: mobs.ghost },
          { data: mobs.countess },
          { data: mobs.darkStalker }
        ]
      }
    ]
  }),
  computed: {
    convictionResistance: function () {
      if (typeof (this.convictionResistanceRaw) === 'number') {
        localStorage.convictionResistance = this.convictionResistanceRaw
        return this.convictionResistanceRaw
      }
      localStorage.removeItem('convictionResistance')
      return 0
    },
    lowerResResistance: function () {
      if (typeof (this.lowerResResistanceRaw) === 'number') {
        localStorage.lowerResResistance = this.lowerResResistanceRaw
        return this.lowerResResistanceRaw
      }
      localStorage.removeItem('lowerResResistance')
      return 0
    },
    grimWardResistance: function () {
      if (typeof (this.grimWardResistanceRaw) === 'number') {
        localStorage.grimWardResistance = this.grimWardResistanceRaw
        return this.grimWardResistanceRaw
      }
      localStorage.removeItem('grimWardResistance')
      return 0
    },
    coldPierce: function () {
      if (typeof (this.coldPierceRaw) === 'number') {
        localStorage.coldPierce = this.coldPierceRaw
        return this.coldPierceRaw
      }
      localStorage.removeItem('coldPierce')
      return 0
    },
    firePierce: function () {
      if (typeof (this.firePierceRaw) === 'number') {
        localStorage.firePierce = this.firePierceRaw
        return this.firePierceRaw
      }
      localStorage.removeItem('firePierce')
      return 0
    },
    lightningPierce: function () {
      if (typeof (this.lightningPierceRaw) === 'number') {
        localStorage.lightningPierce = this.lightningPierceRaw
        return this.lightningPierceRaw
      }
      localStorage.removeItem('lightningPierce')
      return 0
    },
    poisonPierce: function () {
      if (typeof (this.poisonPierceRaw) === 'number') {
        localStorage.poisonPierce = this.poisonPierceRaw
        return this.poisonPierceRaw
      }
      localStorage.removeItem('poisonPierce')
      return 0
    },
    mapColdResistance: function () {
      if (typeof (this.mapColdResistanceRaw) === 'number') return this.mapColdResistanceRaw
      return 0
    },
    mapFireResistance: function () {
      if (typeof (this.mapFireResistanceRaw) === 'number') return this.mapFireResistanceRaw
      return 0
    },
    mapLightningResistance: function () {
      if (typeof (this.mapLightningResistanceRaw) === 'number') return this.mapLightningResistanceRaw
      return 0
    },
    mapMagicResistance: function () {
      if (typeof (this.mapMagicResistanceRaw) === 'number') return this.mapMagicResistanceRaw
      return 0
    },
    mapPhysicalResistance: function () {
      if (typeof (this.mapPhysicalResistanceRaw) === 'number') return this.mapPhysicalResistanceRaw
      return 0
    },
    mapPoisonResistance: function () {
      if (typeof (this.mapPoisonResistanceRaw) === 'number') return this.mapPoisonResistanceRaw
      return 0
    }
  },
  watch: {
    hasAmplifyDamage: function (val) {
      if (val) {
        this.hasDecrepify = false
        localStorage.hasAmplifyDamage = 'true'
        localStorage.removeItem('hasDecrepify')
      } else {
        localStorage.removeItem('hasAmplifyDamage')
      }
    },
    hasDecrepify: function (val) {
      if (val) {
        this.hasAmplifyDamage = false
        localStorage.hasDecrepify = 'true'
        localStorage.removeItem('hasAmplifyDamage')
      } else {
        localStorage.removeItem('hasDecrepify')
      }
    }
  }
}
</script>

<style>
  .cold {
    background-color: rgb(33,150,243,1) !important;
    border-color: rgb(33,150,243,1) !important;
  }
  .cold.darken-1 {
    background-color: rgb(33,150,243,0.8) !important;
    border-color: rgb(33,150,243,0.8) !important;
  }
  .cold.darken-2 {
    background-color: rgb(33,150,243,0.6) !important;
    border-color: rgb(33,150,243,0.7) !important;
  }
  .cold.darken-3 {
    background-color: rgb(33,150,243,0.4) !important;
    border-color: rgb(33,150,243,0.4) !important;
  }
  .cold.darken-4 {
    background-color: rgb(33,150,243,0.2) !important;
    border-color: rgb(33,150,243,0.2) !important;
  }
  .cold.darken-5 {
    background-color: rgb(33,150,243,0.1) !important;
    border-color: rgb(33,150,243,0.1) !important;
  }
  .fire {
    background-color: rgb(244,67,54,1) !important;
    border-color: rgb(244,67,54,1) !important;
  }
  .fire.darken-1 {
    background-color: rgb(244,67,54,0.8) !important;
    border-color: rgb(244,67,54,0.8) !important;
  }
  .fire.darken-2 {
    background-color: rgb(244,67,54,0.6) !important;
    border-color: rgb(244,67,54,0.7) !important;
  }
  .fire.darken-3 {
    background-color: rgb(244,67,54,0.4) !important;
    border-color: rgb(244,67,54,0.4) !important;
  }
  .fire.darken-4 {
    background-color: rgb(244,67,54,0.2) !important;
    border-color: rgb(244,67,54,0.2) !important;
  }
  .fire.darken-5 {
    background-color: rgb(244,67,54,0.1) !important;
    border-color: rgb(244,67,54,0.1) !important;
  }
  .lightning {
    background-color: rgb(255,193,7,1) !important;
    border-color: rgb(255,193,7,1) !important;
  }
  .lightning.darken-1 {
    background-color: rgb(255,193,7,0.8) !important;
    border-color: rgb(255,193,7,0.8) !important;
  }
  .lightning.darken-2 {
    background-color: rgb(255,193,7,0.6) !important;
    border-color: rgb(255,193,7,0.7) !important;
  }
  .lightning.darken-3 {
    background-color: rgb(255,193,7,0.4) !important;
    border-color: rgb(255,193,7,0.4) !important;
  }
  .lightning.darken-4 {
    background-color: rgb(255,193,7,0.2) !important;
    border-color: rgb(255,193,7,0.2) !important;
  }
  .lightning.darken-5 {
    background-color: rgb(255,193,7,0.1) !important;
    border-color: rgb(255,193,7,0.1) !important;
  }
  .magic {
    background-color: rgb(156,39,176,1) !important;
    border-color: rgb(156,39,176,1) !important;
  }
  .magic.darken-1 {
    background-color: rgb(156,39,176,0.8) !important;
    border-color: rgb(156,39,176,0.8) !important;
  }
  .magic.darken-2 {
    background-color: rgb(156,39,176,0.6) !important;
    border-color: rgb(156,39,176,0.7) !important;
  }
  .magic.darken-3 {
    background-color: rgb(156,39,176,0.4) !important;
    border-color: rgb(156,39,176,0.4) !important;
  }
  .magic.darken-4 {
    background-color: rgb(156,39,176,0.2) !important;
    border-color: rgb(156,39,176,0.2) !important;
  }
  .magic.darken-5 {
    background-color: rgb(156,39,176,0.1) !important;
    border-color: rgb(156,39,176,0.1) !important;
  }
  .physical {
    background-color: rgb(121,85,72,1) !important;
    border-color: rgb(121,85,72,1) !important;
  }
  .physical.darken-1 {
    background-color: rgb(121,85,72,0.8) !important;
    border-color: rgb(121,85,72,0.8) !important;
  }
  .physical.darken-2 {
    background-color: rgb(121,85,72,0.6) !important;
    border-color: rgb(121,85,72,0.7) !important;
  }
  .physical.darken-3 {
    background-color: rgb(121,85,72,0.4) !important;
    border-color: rgb(121,85,72,0.4) !important;
  }
  .physical.darken-4 {
    background-color: rgb(121,85,72,0.2) !important;
    border-color: rgb(121,85,72,0.2) !important;
  }
  .physical.darken-5 {
    background-color: rgb(121,85,72,0.1) !important;
    border-color: rgb(121,85,72,0.1) !important;
  }
  .poison {
    background-color: rgb(76,175,80,1) !important;
    border-color: rgb(76,175,80,1) !important;
  }
  .poison.darken-1 {
    background-color: rgb(76,175,80,0.8) !important;
    border-color: rgb(76,175,80,0.8) !important;
  }
  .poison.darken-2 {
    background-color: rgb(76,175,80,0.6) !important;
    border-color: rgb(76,175,80,0.7) !important;
  }
  .poison.darken-3 {
    background-color: rgb(76,175,80,0.4) !important;
    border-color: rgb(76,175,80,0.4) !important;
  }
  .poison.darken-4 {
    background-color: rgb(76,175,80,0.2) !important;
    border-color: rgb(76,175,80,0.2) !important;
  }
  .poison.darken-5 {
    background-color: rgb(76,175,80,0.1) !important;
    border-color: rgb(76,175,80,0.1) !important;
  }
</style>
