<template>
  <div>
    <div class="d-flex">
      <h2 class="ml-4 mr-10 align-self-baseline">
        {{ mapData.title }}
      </h2>
      <div
        v-if="immunes.count > 0"
        class="align-self-baseline"
      >
        <span class="mr-2">immunes</span>
        <v-chip
          v-if="immunes.cold"
          color="blue"
          title="cold immunes"
          class="mr-2"
          x-small
        >
          <strong>{{ immunes.cold }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.fire"
          color="red"
          light
          title="fire immunes"
          class="mr-2"
          x-small
        >
          <strong>{{ immunes.fire }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.lightning"
          color="amber"
          light
          title="lightning immunes"
          class="mr-2"
          x-small
        >
          <strong>{{ immunes.lightning }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.magic"
          color="purple"
          dark
          title="magic immunes"
          class="mr-2"
          x-small
        >
          <strong>{{ immunes.magic }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.physical"
          color="brown"
          title="physical immunes"
          class="mr-2"
          x-small
        >
          <strong>{{ immunes.physical }}</strong>
        </v-chip>
        <v-chip
          v-if="immunes.poison"
          color="green"
          title="poison immunes"
          class="mr-2"
          x-small
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
    <v-data-table
      disable-pagination
      hide-default-footer
      :headers="headers"
      :items="mobs"
      dense
      calculate-widths
    >
      <template #[`item.name`]="{ item }">
        {{ item.name }} <span
          v-if="item.note"
          class="text-caption"
        >({{ item.note }})</span>
      </template>
      <template #[`item.cold`]="{ item }">
        <v-chip
          v-if="item.cold >= 100"
          color="cold"
          small
        >
          <strong>{{ item.cold }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.cold >= 75"
          color="cold darken-3"
          small
        >
          {{ item.cold }}
        </v-chip>
        <v-chip
          v-else-if="item.cold >= 50"
          color="cold darken-4"
          small
        >
          {{ item.cold }}
        </v-chip>
        <v-chip
          v-else-if="item.cold >= 1"
          color="cold darken-4"
          small
        >
          {{ item.cold }}
        </v-chip>
        <v-chip
          v-else
          color="transparent"
          small
        >
          {{ item.cold }}
        </v-chip>
      </template>
      <template #[`item.fire`]="{ item }">
        <v-chip
          v-if="item.fire >= 100"
          color="fire"
          light
          small
        >
          <strong>{{ item.fire }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.fire >= 75"
          color="fire darken-3"
          small
        >
          {{ item.fire }}
        </v-chip>
        <v-chip
          v-else-if="item.fire >= 50"
          color="fire darken-4"
          small
        >
          {{ item.fire }}
        </v-chip>
        <v-chip
          v-else-if="item.fire >= 1"
          color="fire darken-4"
          small
        >
          {{ item.fire }}
        </v-chip>
        <v-chip
          v-else
          color="transparent"
          small
        >
          {{ item.fire }}
        </v-chip>
      </template>
      <template #[`item.lightning`]="{ item }">
        <v-chip
          v-if="item.lightning >= 100"
          color="lightning"
          light
          small
        >
          <strong>{{ item.lightning }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.lightning >= 75"
          color="lightning darken-3"
          small
        >
          {{ item.lightning }}
        </v-chip>
        <v-chip
          v-else-if="item.lightning >= 50"
          color="lightning darken-4"
          small
        >
          {{ item.lightning }}
        </v-chip>
        <v-chip
          v-else-if="item.lightning >= 1"
          color="lightning darken-5"
          small
        >
          {{ item.lightning }}
        </v-chip>
        <v-chip
          v-else
          color="transparent"
          small
        >
          {{ item.lightning }}
        </v-chip>
      </template>
      <template #[`item.magic`]="{ item }">
        <v-chip
          v-if="item.magic >= 100"
          color="magic"
          small
        >
          <strong>{{ item.magic }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.magic >= 75"
          color="magic darken-3"
          small
        >
          {{ item.magic }}
        </v-chip>
        <v-chip
          v-else-if="item.magic >= 50"
          color="magic darken-4"
          small
        >
          {{ item.magic }}
        </v-chip>
        <v-chip
          v-else-if="item.magic >= 1"
          color="magic darken-4"
          small
        >
          {{ item.magic }}
        </v-chip>
        <v-chip
          v-else
          color="transparent"
          small
        >
          {{ item.magic }}
        </v-chip>
      </template>
      <template #[`item.physical`]="{ item }">
        <v-chip
          v-if="item.physical >= 100"
          color="physical"
          small
        >
          <strong>{{ item.physical }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.physical >= 75"
          color="physical darken-3"
          small
        >
          {{ item.physical }}
        </v-chip>
        <v-chip
          v-else-if="item.physical >= 50"
          color="physical darken-4"
          small
        >
          {{ item.physical }}
        </v-chip>
        <v-chip
          v-else-if="item.physical >= 1"
          color="physical darken-4"
          small
        >
          {{ item.physical }}
        </v-chip>
        <v-chip
          v-else
          color="transparent"
          small
        >
          {{ item.physical }}
        </v-chip>
      </template>
      <template #[`item.poison`]="{ item }">
        <v-chip
          v-if="item.poison >= 100"
          color="poison"
          small
        >
          <strong>{{ item.poison }}</strong>
        </v-chip>
        <v-chip
          v-else-if="item.poison >= 75"
          color="poison darken-3"
          small
        >
          {{ item.poison }}
        </v-chip>
        <v-chip
          v-else-if="item.poison >= 50"
          color="poison darken-4"
          small
        >
          {{ item.poison }}
        </v-chip>
        <v-chip
          v-else-if="item.poison >= 1"
          color="poison darken-4"
          small
        >
          {{ item.poison }}
        </v-chip>
        <v-chip
          v-else
          color="transparent"
          small
        >
          {{ item.poison }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
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
    }
  },
  data: () => ({
    headers: [
      { text: 'Name', value: 'name', width: '15%' },
      { text: 'Model', value: 'model', width: '15%' },
      { text: 'Type', value: 'type', width: '10%' },
      { text: 'Cold', value: 'cold', width: '10%' },
      { text: 'Fire', value: 'fire', width: '10%' },
      { text: 'Lightning', value: 'lightning', width: '10%' },
      { text: 'Magic', value: 'magic', width: '10%' },
      { text: 'Physical', value: 'physical', width: '10%' },
      { text: 'Poison', value: 'poison', width: '10%' }
    ]
  }),
  computed: {
    mobs: function () {
      const ampResistance = this.hasAmplifyDamage ? -100 : 0
      const decrepifyResistance = this.hasDecrepify ? -50 : 0
      const mobs = []
      for (let m = 0; m < this.mapData.mobs.length; m++) {
        const mob = { ...this.mapData.mobs[m].data } // copy by value
        if (this.mapData.mobs[m].note) mob.note = this.mapData.mobs[m].note // add note to mobs data
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
          0
        )
        mob.physical = this.applyResistanceReduction(
          mob.physical + this.mapPhysicalResistance,
          this.grimWardResistance + ampResistance + decrepifyResistance,
          0
        )
        mob.poison = this.applyResistanceReduction(
          mob.poison + this.mapPoisonResistance,
          this.lowerResResistance,
          this.poisonPierce
        )
        mobs.push(mob)
      }
      return mobs
    },
    immunes: function () {
      const immunes = {
        cold: this.mobs.filter((mob) => mob.cold >= 100).length,
        fire: this.mobs.filter((mob) => mob.fire >= 100).length,
        lightning: this.mobs.filter((mob) => mob.lightning >= 100).length,
        magic: this.mobs.filter((mob) => mob.magic >= 100).length,
        physical: this.mobs.filter((mob) => mob.physical >= 100).length,
        poison: this.mobs.filter((mob) => mob.poison >= 100).length
      }
      immunes.count =
        immunes.cold +
        immunes.fire +
        immunes.lightning +
        immunes.magic +
        immunes.physical +
        immunes.poison
      return immunes
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
    }
  }
}
</script>
