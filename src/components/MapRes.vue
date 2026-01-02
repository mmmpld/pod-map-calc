<template>
  <div>
    <div class="d-flex">
      <h2 class="ml-4 mr-10 align-self-baseline">
        {{ mapData.title }}
        <v-chip :color="mapColor">
          {{ mapData.areaLevel }}
        </v-chip>
      </h2>
      <div
        v-if="immunes.count > 0"
        class="align-self-baseline"
      >
        <span class="mr-2">immunes</span>
        <v-chip
          v-if="immunes.cold"
          color="cold"
          title="cold immunes"
          class="mr-2"
          density="compact"
        >
          <strong>{{ immunes.cold }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.fire"
          color="fire"
          title="fire immunes"
          class="mr-2"
          density="compact"
        >
          <strong>{{ immunes.fire }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.lightning"
          color="lightning"
          title="lightning immunes"
          class="mr-2"
          density="compact"
        >
          <strong>{{ immunes.lightning }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.magic"
          color="magic"
          title="magic immunes"
          class="mr-2"
          density="compact"
        >
          <strong>{{ immunes.magic }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.physical"
          color="physical"
          title="physical immunes"
          class="mr-2"
          density="compact"
        >
          <strong>{{ immunes.physical }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.poison"
          color="poison"
          title="poison immunes"
          class="mr-2"
          density="compact"
        >
          <strong>{{ immunes.poison }}</strong>
        </v-chip>
      </div>
      <div
        v-else
        class="align-self-baseline"
      >
        no immunes
      </div>
    </div>
    <div v-if="mapData.note" class="text-caption ml-4 mb-1">
      {{  mapData.note }}
    </div>
    <v-data-table
      disable-pagination
      items-per-page="-1"
      hide-default-footer
      :headers="headers"
      :items="mobs"
      dense
      calculate-widths
    >
      <template #item.name="{ item }">
        {{ item.raw.name ?? item.raw.id }} <span
          v-if="item.raw.note"
          class="text-caption"
        >({{ item.raw.note }})</span>
      </template>
      <template #item.cold="{ item }">
        <v-chip
          v-if="item.raw.cold >= 100"
          color="cold"
          size="small"
        >
          <strong>{{ item.raw.cold }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.raw.cold >= 75"
          color="cold darken-3"
          size="small"
        >
          {{ item.raw.cold }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.cold >= 50"
          color="cold darken-4"
          size="small"
        >
          {{ item.raw.cold }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.cold >= 1"
          color="cold darken-4"
          size="small"
        >
          {{ item.raw.cold }}
        </v-chip>
        <v-chip
          v-else
          variant="plain"
          size="small"
        >
          {{ item.raw.cold }}
        </v-chip>
      </template>
      <template #item.fire="{ item }">
        <v-chip
          v-if="item.raw.fire >= 100"
          color="fire"
          size="small"
        >
          <strong>{{ item.raw.fire }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.raw.fire >= 75"
          color="fire darken-3"
          size="small"
        >
          {{ item.raw.fire }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.fire >= 50"
          color="fire darken-4"
          size="small"
        >
          {{ item.raw.fire }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.fire >= 1"
          color="fire darken-4"
          size="small"
        >
          {{ item.raw.fire }}
        </v-chip>
        <v-chip
          v-else
          variant="plain"
          size="small"
        >
          {{ item.raw.fire }}
        </v-chip>
      </template>
      <template #item.lightning="{ item }">
        <v-chip
          v-if="item.raw.lightning >= 100"
          color="lightning"
          size="small"
        >
          <strong>{{ item.raw.lightning }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.raw.lightning >= 75"
          color="lightning darken-3"
          size="small"
        >
          {{ item.raw.lightning }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.lightning >= 50"
          color="lightning darken-4"
          size="small"
        >
          {{ item.raw.lightning }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.lightning >= 1"
          color="lightning darken-5"
          size="small"
        >
          {{ item.raw.lightning }}
        </v-chip>
        <v-chip
          v-else
          variant="plain"
          size="small"
        >
          {{ item.raw.lightning }}
        </v-chip>
      </template>
      <template #item.magic="{ item }">
        <v-chip
          v-if="item.raw.magic >= 100"
          color="magic"
          size="small"
        >
          <strong>{{ item.raw.magic }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.raw.magic >= 75"
          color="magic darken-3"
          size="small"
        >
          {{ item.raw.magic }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.magic >= 50"
          color="magic darken-4"
          size="small"
        >
          {{ item.raw.magic }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.magic >= 1"
          color="magic darken-4"
          size="small"
        >
          {{ item.raw.magic }}
        </v-chip>
        <v-chip
          v-else
          variant="plain"
          size="small"
        >
          {{ item.raw.magic }}
        </v-chip>
      </template>
      <template #item.physical="{ item }">
        <v-chip
          v-if="item.raw.physical >= 100"
          color="physical"
          size="small"
        >
          <strong>{{ item.raw.physical }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.raw.physical >= 75"
          color="physical darken-3"
          size="small"
        >
          {{ item.raw.physical }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.physical >= 50"
          color="physical darken-4"
          size="small"
        >
          {{ item.raw.physical }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.physical >= 1"
          color="physical darken-4"
          size="small"
        >
          {{ item.raw.physical }}
        </v-chip>
        <v-chip
          v-else
          variant="plain"
          size="small"
        >
          {{ item.raw.physical }}
        </v-chip>
      </template>
      <template #item.poison="{ item }">
        <v-chip
          v-if="item.raw.poison >= 100"
          color="poison"
          size="small"
        >
          <strong>{{ item.raw.poison }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.raw.poison >= 75"
          color="poison darken-3"
          size="small"
        >
          {{ item.raw.poison }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.poison >= 50"
          color="poison darken-4"
          size="small"
        >
          {{ item.raw.poison }}
        </v-chip>
        <v-chip
          v-else-if="item.raw.poison >= 1"
          color="poison darken-4"
          size="small"
        >
          {{ item.raw.poison }}
        </v-chip>
        <v-chip
          v-else
          variant="plain"
          size="small"
        >
          {{ item.raw.poison }}
        </v-chip>
      </template>
      <template #item.life="{ item }">
        <span :title="item.raw.lifeMin + '–' + item.raw.lifeMax">
          {{ item.raw.life }}
        </span>
      </template>
      <template #bottom />
    </v-data-table>
  </div>
</template>

<script>
import { statisticsMap, findName, calcLife } from '@/assets/monsterStatistics'

export default {
  name: 'MapRes',
  props: {
    mapData: {
      type: Object,
      default: null
    },
    convictionResistance: {
      type: Number,
      default: 0
    },
    lowerResResistance: {
      type: Number,
      default: 0
    },
    grimWardResistance: {
      type: Number,
      default: 0
    },
    hasAmplifyDamage: {
      type: Boolean,
      default: false
    },
    hasDecrepify: {
      type: Boolean,
      default: false
    },
    coldPierce: {
      type: Number,
      default: 0
    },
    firePierce: {
      type: Number,
      default: 0
    },
    lightningPierce: {
      type: Number,
      default: 0
    },
    magicPierce: {
      type: Number,
      default: 0
    },
    physicalPierce: {
      type: Number,
      default: 0
    },
    poisonPierce: {
      type: Number,
      default: 0
    },
    mapColdResistance: {
      type: Number,
      default: 0
    },
    mapFireResistance: {
      type: Number,
      default: 0
    },
    mapLightningResistance: {
      type: Number,
      default: 0
    },
    mapMagicResistance: {
      type: Number,
      default: 0
    },
    mapPhysicalResistance: {
      type: Number,
      default: 0
    },
    mapPoisonResistance: {
      type: Number,
      default: 0
    },
    playerCount: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    headers: [
      { title: 'Name', value: 'name', width: '15%', key: 'name' },
      // { title: 'Model', value: 'model', width: '15%', key: 'model' },
      // { title: 'Type', value: 'type', width: '10%', key: 'type' },
      { title: 'Cold', value: 'cold', width: '10%', key: 'cold' },
      { title: 'Fire', value: 'fire', width: '10%', key: 'fire' },
      { title: 'Lightning', value: 'lightning', width: '10%', key: 'lightning' },
      { title: 'Magic', value: 'magic', width: '10%', key: 'magic' },
      { title: 'Physical', value: 'physical', width: '10%', key: 'physical' },
      { title: 'Poison', value: 'poison', width: '10%', key: 'poison' },
      { title: 'Life', value: 'life', width: '10%', key: 'life'}
    ]
  }),
  computed: {
    mobs: function () {
      const ampResistance = this.hasAmplifyDamage ? -100 : 0
      const decrepifyResistance = this.hasDecrepify ? -50 : 0
      const mobs = []
      for (let m = 0; m < this.mapData.mobs.length; m++) {
        const mob = { ...this.mapData.mobs[m] } // copy by value
        // attempt to fill missing data from vanilla files
        if (mob.id) {
          const mobStats = statisticsMap.get(mob.id)
          if (mobStats) {
            mob.name = mob.name ?? findName(mobStats.NameStr)
            mob.cold = mob.cold ?? mobStats['ResCo(H)'] ?? 0
            mob.fire = mob.fire ?? mobStats['ResFi(H)'] ?? 0
            mob.lightning = mob.lightning ?? mobStats['ResLi(H)'] ?? 0
            mob.magic = mob.magic ?? mobStats['ResMa(H)'] ?? 0
            mob.physical = mob.physical ?? mobStats['ResDm(H)'] ?? 0
            mob.poison = mob.poison ?? mobStats['ResPo(H)'] ?? 0
            mob.minHp = mob.minHp ?? mobStats['MinHP(H)'] ?? 0
            mob.maxHp = mob.maxHp ?? mobStats['MaxHP(H)'] ?? 0
          }
        }
        // apply calculations
        mob.cold = this.applyResistanceReduction(
          mob.cold + this.mapColdResistance,
          this.convictionResistance + this.lowerResResistance,
          this.coldPierce
        )
        mob.fire = this.applyResistanceReduction(
          mob.fire + this.mapFireResistance,
          this.convictionResistance + this.lowerResResistance,
          this.firePierce
        )
        mob.lightning = this.applyResistanceReduction(
          mob.lightning + this.mapLightningResistance,
          this.convictionResistance + this.lowerResResistance,
          this.lightningPierce
        )
        mob.magic = this.applyResistanceReduction(
          mob.magic + this.mapMagicResistance,
          0,
          this.magicPierce
        )
        mob.physical = this.applyResistanceReduction(
          mob.physical + this.mapPhysicalResistance,
          this.grimWardResistance + ampResistance + decrepifyResistance,
          this.physicalPierce
        )
        mob.poison = this.applyResistanceReduction(
          mob.poison + this.mapPoisonResistance,
          this.lowerResResistance,
          this.poisonPierce
        )
        mob.lifeMin = mob.lifeMin ?? calcLife(mob.minHp ?? 0, mob.mLvl ?? this.mapData.areaLevel, this.playerCount, 'Hell', mob.monsterPromotion ?? 'Standard')
        mob.lifeMax = mob.lifeMax ?? calcLife(mob.maxHp ?? 0, mob.mLvl ?? this.mapData.areaLevel, this.playerCount, 'Hell', mob.monsterPromotion ?? 'Standard')
        mob.life = this.humanizedAverage([ mob.lifeMin, mob.lifeMax])
        mobs.push(mob)
      }
      return mobs
    },
    immunes: function () {
      const immunes = {
        cold: this.mobs.filter(mob => mob.cold >= 100).length,
        fire: this.mobs.filter(mob => mob.fire >= 100).length,
        lightning: this.mobs.filter(mob => mob.lightning >= 100).length,
        magic: this.mobs.filter(mob => mob.magic >= 100).length,
        physical: this.mobs.filter(mob => mob.physical >= 100).length,
        poison: this.mobs.filter(mob => mob.poison >= 100).length
      }
      immunes.count =
        immunes.cold +
        immunes.fire +
        immunes.lightning +
        immunes.magic +
        immunes.physical +
        immunes.poison
      return immunes
    },
    mapColor: function () {
      return this.areaLevelColorName(this.mapData.areaLevel)
    }
  },
  methods: {
    applyResistanceReduction: function (
      mobResistance,
      immuneBreakingResistance,
      pierceResistance
    ) {
      let modifiedMobResistance = mobResistance
      const negativePierceResistance =
        pierceResistance > 0 ? pierceResistance * -1 : pierceResistance // ensure pierce is negative
      if (modifiedMobResistance >= 100) { immuneBreakingResistance = Math.ceil(immuneBreakingResistance / 5) } // apply immune penalty
      modifiedMobResistance += immuneBreakingResistance
      if (modifiedMobResistance <= 99) { modifiedMobResistance += negativePierceResistance } // apply pierce only if not immune
      modifiedMobResistance = Math.max(modifiedMobResistance, 0) // minimum mob res zero
      return modifiedMobResistance
    },
    /**
     * Short formatted average
     * @param {number[]} values - Values to average
     */
    humanizedAverage: function (values) {
      const average = values.reduce((sum, currentValue) => sum + currentValue, 0) / values.length
      const humanized = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(average);
      return humanized
    },
    areaLevelColorName: function (areaLevel) {
      switch (areaLevel) {
        case 88:
          return 'red'
        case 87:
          return 'yellow'
          case 86:
        default:
          return 'white'
      }
    }
  }
}
</script>
