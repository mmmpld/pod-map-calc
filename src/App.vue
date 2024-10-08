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
          class="px-8 bg-black d-none d-md-block"
        />
        <v-divider vertical />
        <v-col class="px-8">
          <h1>Path of Diablo Map Calculator</h1>
          <v-badge
            content="Beta Patch 2"
            inline
            color="info"
          />
          <BetaThrob />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          lg="2"
          md="4"
          class="px-8 bg-black"
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
              min="0"
            />
            <v-text-field
              v-model.number="lightningPierceRaw"
              type="number"
              label="Lightning Pierce %"
              min="0"
            />
            <v-text-field
              v-model.number="firePierceRaw"
              type="number"
              label="Fire Pierce %"
              min="0"
            />
            <v-text-field
              v-model.number="poisonPierceRaw"
              type="number"
              label="Poison Pierce %"
              min="0"
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
            <v-select
              v-model="playerCountRaw"
              :items="playerCountOptions"
              label="Player Count"
            />
          </v-form>
        </v-col>
        <v-divider vertical />
        <v-col class="px-8">
          <v-main class="flex-column">
            <v-tabs v-model="tab">
              <v-tab data-testid="maps-tab-button">Maps</v-tab>
              <v-tab data-testid="farm-tab-button">Farms</v-tab>
            </v-tabs>

            <v-window
              v-model="tab"
              class="pt-5"
            >
              <v-window-item
                key="maps"
                class="maps-tab"
              >
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
                  :player-count="playerCount"
                  class="mb-8"
                />
              </v-window-item>
              <v-window-item
                key="farms"
                class="farms-tab"
              >
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
                  :player-count="playerCount"
                  class="mb-8"
                />
              </v-window-item>
            </v-window>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MapRes from './components/MapRes.vue'
import BetaThrob from './components/BetaThrob.vue'
import mapMobs from './assets/mapMobs'
import farmMobs from './assets/farmMobs'

export default {
  name: 'App',
  components: {
    MapRes,
    BetaThrob
  },
  data: () => ({
    convictionResistanceRaw: parseInt(localStorage.convictionResistance) || null,
    convictionOptions: [
      { value: null, title: 'none' },
      { value: -30, title: '1' },
      { value: -35, title: '2' },
      { value: -40, title: '3' },
      { value: -45, title: '4' },
      { value: -50, title: '5' },
      { value: -55, title: '6' },
      { value: -60, title: '7' },
      { value: -65, title: '8' },
      { value: -70, title: '9' },
      { value: -75, title: '10' },
      { value: -80, title: '11' },
      { value: -85, title: '12 (Infinity)' },
      { value: -90, title: '13' },
      { value: -95, title: '14' },
      { value: -100, title: '15' },
      { value: -105, title: '16' },
      { value: -110, title: '17' },
      { value: -115, title: '18' },
      { value: -120, title: '19' },
      { value: -125, title: '20' },
      { value: -130, title: '21' },
      { value: -135, title: '22' },
      { value: -140, title: '23' },
      { value: -145, title: '24' },
      { value: -150, title: '25' }
    ],
    lowerResResistanceRaw: parseInt(localStorage.lowerResResistance) || null,
    lowerResOptions: [
      { value: null, title: 'none' },
      { value: -52, title: '1' },
      { value: -61, title: '2' },
      { value: -68, title: '3' },
      { value: -75, title: '4' },
      { value: -80, title: '5' },
      { value: -84, title: '6' },
      { value: -87, title: '7' },
      { value: -89, title: '8' },
      { value: -92, title: '9' },
      { value: -94, title: '10' },
      { value: -96, title: '11' },
      { value: -98, title: '12' },
      { value: -100, title: '13' },
      { value: -101, title: '14' },
      { value: -102, title: '15' },
      { value: -104, title: '16' },
      { value: -104, title: '17' },
      { value: -105, title: '18' },
      { value: -106, title: '19' },
      { value: -107, title: '20' },
      { value: -108, title: '21' },
      { value: -109, title: '22' },
      { value: -110, title: '23' },
      { value: -111, title: '24' },
      { value: -112, title: '25' },
      { value: -113, title: '26' },
      { value: -114, title: '27' },
      { value: -115, title: '28' },
      { value: -116, title: '29' },
      { value: -117, title: '30' },
      { value: -118, title: '31' },
      { value: -119, title: '32' },
      { value: -120, title: '33' },
      { value: -121, title: '34' },
      { value: -122, title: '35' },
      { value: -123, title: '36' },
      { value: -124, title: '37' },
      { value: -125, title: '38' },
      { value: -126, title: '39' },
      { value: -127, title: '40' },
      { value: -128, title: '41' },
      { value: -129, title: '42' },
      { value: -130, title: '43' },
      { value: -131, title: '44' },
      { value: -132, title: '45' },
      { value: -133, title: '46' },
      { value: -134, title: '47' },
      { value: -135, title: '48' },
      { value: -136, title: '49' },
      { value: -137, title: '50' },
      { value: -138, title: '51' },
      { value: -139, title: '52' },
      { value: -140, title: '53' },
      { value: -141, title: '54' },
      { value: -142, title: '55' },
      { value: -143, title: '56' },
      { value: -144, title: '57' },
      { value: -145, title: '58' },
      { value: -146, title: '59' },
      { value: -147, title: '60' }
    ],
    grimWardResistanceRaw: parseInt(localStorage.grimWardResistance) || null,
    grimWardOptions: [
      { value: null, title: 'none' },
      { value: -10, title: '1' },
      { value: -12, title: '2' },
      { value: -14, title: '3' },
      { value: -16, title: '4' },
      { value: -18, title: '5' },
      { value: -20, title: '6' },
      { value: -22, title: '7' },
      { value: -24, title: '8' },
      { value: -26, title: '9' },
      { value: -28, title: '10' },
      { value: -30, title: '11' },
      { value: -32, title: '12' },
      { value: -34, title: '13' },
      { value: -36, title: '14' },
      { value: -38, title: '15' },
      { value: -40, title: '16' },
      { value: -42, title: '17' },
      { value: -44, title: '18' },
      { value: -46, title: '19' },
      { value: -48, title: '20' },
      { value: -50, title: '21' },
      { value: -52, title: '22' },
      { value: -54, title: '23' },
      { value: -56, title: '24' },
      { value: -58, title: '25' },
      { value: -60, title: '26' },
      { value: -62, title: '27' },
      { value: -64, title: '28' },
      { value: -66, title: '29' },
      { value: -68, title: '30' },
      { value: -70, title: '31' },
      { value: -72, title: '32' },
      { value: -74, title: '33' },
      { value: -76, title: '34' },
      { value: -78, title: '35' },
      { value: -80, title: '36' },
      { value: -82, title: '37' },
      { value: -84, title: '38' },
      { value: -86, title: '39' },
      { value: -88, title: '40' },
      { value: -90, title: '41' },
      { value: -92, title: '42' },
      { value: -94, title: '43' },
      { value: -96, title: '44' },
      { value: -98, title: '45' },
      { value: -100, title: '46' },
      { value: -102, title: '47' },
      { value: -104, title: '48' },
      { value: -106, title: '49' },
      { value: -108, title: '50' },
      { value: -110, title: '51' },
      { value: -112, title: '52' },
      { value: -114, title: '53' },
      { value: -116, title: '54' },
      { value: -118, title: '55' },
      { value: -120, title: '56' },
      { value: -122, title: '57' },
      { value: -124, title: '58' },
      { value: -126, title: '59' },
      { value: -128, title: '60' }
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
    playerCountRaw: parseInt(localStorage.playerCount) || null,
    playerCountOptions: [
      { value: 1, title: '1' },
      { value: 2, title: '2' },
      { value: 3, title: '3' },
      { value: 4, title: '4' },
      { value: 5, title: '5' },
      { value: 6, title: '6' },
      { value: 7, title: '7' },
      { value: 8, title: '8' }
  ],
    tab: null,
    maps: mapMobs,
    farms: farmMobs
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
      if (typeof (this.mapColdResistanceRaw) === 'number') { return this.mapColdResistanceRaw }
      return 0
    },
    mapFireResistance: function () {
      if (typeof (this.mapFireResistanceRaw) === 'number') { return this.mapFireResistanceRaw }
      return 0
    },
    mapLightningResistance: function () {
      if (typeof (this.mapLightningResistanceRaw) === 'number') { return this.mapLightningResistanceRaw }
      return 0
    },
    mapMagicResistance: function () {
      if (typeof (this.mapMagicResistanceRaw) === 'number') { return this.mapMagicResistanceRaw }
      return 0
    },
    mapPhysicalResistance: function () {
      if (typeof (this.mapPhysicalResistanceRaw) === 'number') { return this.mapPhysicalResistanceRaw }
      return 0
    },
    mapPoisonResistance: function () {
      if (typeof (this.mapPoisonResistanceRaw) === 'number') { return this.mapPoisonResistanceRaw }
      return 0
    },
    playerCount: function () {
      if (typeof (this.playerCountRaw) === 'number') {
        localStorage.playerCount = this.playerCountRaw
        return this.playerCountRaw
      }
      localStorage.removeItem('playerCount')
      return 1
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

<style lang="scss">
  .text-cold {
    color: black;
    background-color: rgb(33,150,243,1) !important;
    border-color: rgb(33,150,243,1) !important;
    &.darken-1 {
      color: white;
      background-color: rgb(33,150,243,0.8) !important;
      border-color: rgb(33,150,243,0.8) !important;
    }
    &.darken-2 {
      color: white;
      background-color: rgb(33,150,243,0.6) !important;
      border-color: rgb(33,150,243,0.7) !important;
    }
    &.darken-3 {
      color: white;
      background-color: rgb(33,150,243,0.4) !important;
      border-color: rgb(33,150,243,0.4) !important;
    }
    &.darken-4 {
      color: white;
      background-color: rgb(33,150,243,0.2) !important;
      border-color: rgb(33,150,243,0.2) !important;
    }
    &.darken-5 {
      color: white;
      background-color: rgb(33,150,243,0.1) !important;
      border-color: rgb(33,150,243,0.1) !important;
    }
  }

  .text-fire {
    color: black;
    background-color: rgb(244,67,54,1) !important;
    border-color: rgb(244,67,54,1) !important;
    &.darken-1 {
      color: white;
      background-color: rgb(244,67,54,0.8) !important;
      border-color: rgb(244,67,54,0.8) !important;
    }
    &.darken-2 {
      color: white;
      background-color: rgb(244,67,54,0.6) !important;
      border-color: rgb(244,67,54,0.7) !important;
    }
    &.darken-3 {
      color: white;
      background-color: rgb(244,67,54,0.4) !important;
      border-color: rgb(244,67,54,0.4) !important;
    }
    &.darken-4 {
      color: white;
      background-color: rgb(244,67,54,0.2) !important;
      border-color: rgb(244,67,54,0.2) !important;
    }
    &.darken-5 {
      color: white;
      background-color: rgb(244,67,54,0.1) !important;
      border-color: rgb(244,67,54,0.1) !important;
    }
  }

  .text-lightning {
    color: black;
    background-color: rgb(255,193,7,1) !important;
    border-color: rgb(255,193,7,1) !important;
    &.darken-1 {
      color: white;
      background-color: rgb(255,193,7,0.8) !important;
      border-color: rgb(255,193,7,0.8) !important;
    }
    &.darken-2 {
      color: white;
      background-color: rgb(255,193,7,0.6) !important;
      border-color: rgb(255,193,7,0.7) !important;
    }
    &.darken-3 {
      color: white;
      background-color: rgb(255,193,7,0.4) !important;
      border-color: rgb(255,193,7,0.4) !important;
    }
    &.darken-4 {
      color: white;
      background-color: rgb(255,193,7,0.2) !important;
      border-color: rgb(255,193,7,0.2) !important;
    }
    &.darken-5 {
      color: white;
      background-color: rgb(255,193,7,0.1) !important;
      border-color: rgb(255,193,7,0.1) !important;
    }
  }

  .text-magic {
    color: black;
    background-color: rgb(156,39,176,1) !important;
    border-color: rgb(156,39,176,1) !important;
    &.darken-1 {
      color: white;
      background-color: rgb(156,39,176,0.8) !important;
      border-color: rgb(156,39,176,0.8) !important;
    }
    &.darken-2 {
      color: white;
      background-color: rgb(156,39,176,0.6) !important;
      border-color: rgb(156,39,176,0.7) !important;
    }
    &.darken-3 {
      color: white;
      background-color: rgb(156,39,176,0.4) !important;
      border-color: rgb(156,39,176,0.4) !important;
    }
    &.darken-4 {
      color: white;
      background-color: rgb(156,39,176,0.2) !important;
      border-color: rgb(156,39,176,0.2) !important;
    }
    &.darken-5 {
      color: white;
      background-color: rgb(156,39,176,0.1) !important;
      border-color: rgb(156,39,176,0.1) !important;
    }
  }

  .text-physical {
    color: black;
    background-color: rgb(121,85,72,1) !important;
    border-color: rgb(121,85,72,1) !important;
    &.darken-1 {
      color: white;
      background-color: rgb(121,85,72,0.8) !important;
      border-color: rgb(121,85,72,0.8) !important;
    }
    &.darken-2 {
      color: white;
      background-color: rgb(121,85,72,0.6) !important;
      border-color: rgb(121,85,72,0.7) !important;
    }
    &.darken-3 {
      color: white;
      background-color: rgb(121,85,72,0.4) !important;
      border-color: rgb(121,85,72,0.4) !important;
    }
    &.darken-4 {
      color: white;
      background-color: rgb(121,85,72,0.2) !important;
      border-color: rgb(121,85,72,0.2) !important;
    }
    &.darken-5 {
      color: white;
      background-color: rgb(121,85,72,0.1) !important;
      border-color: rgb(121,85,72,0.1) !important;
    }
  }

  .text-poison {
    color: black;
    background-color: rgb(76,175,80,1) !important;
    border-color: rgb(76,175,80,1) !important;
    &.darken-1 {
      color: white;
      background-color: rgb(76,175,80,0.8) !important;
      border-color: rgb(76,175,80,0.8) !important;
    }
    &.darken-2 {
      color: white;
      background-color: rgb(76,175,80,0.6) !important;
      border-color: rgb(76,175,80,0.7) !important;
    }
    &.darken-3 {
      color: white;
      background-color: rgb(76,175,80,0.4) !important;
      border-color: rgb(76,175,80,0.4) !important;
    }
    &.darken-4 {
      color: white;
      background-color: rgb(76,175,80,0.2) !important;
      border-color: rgb(76,175,80,0.2) !important;
    }
    &.darken-5 {
      color: white;
      background-color: rgb(76,175,80,0.1) !important;
      border-color: rgb(76,175,80,0.1) !important;
    }
  }
</style>
