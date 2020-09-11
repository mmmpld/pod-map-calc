<template>
  <div>
    <div class="d-flex">
      <h2 class="mr-10 align-self-baseline">
        {{mapData.title}}
      </h2>
      <div v-if="immunes.count > 0" class="align-self-baseline">
        <span class="mr-2">immunes</span>
        <v-chip v-if="immunes.cold" color="blue" dark title="cold immunes" class="mr-2" x-small><strong>{{ immunes.cold }}</strong></v-chip>
        <v-chip v-if="immunes.fire" color="red" dark title="fire immunes" class="mr-2" x-small><strong>{{ immunes.fire }}</strong></v-chip>
        <v-chip v-if="immunes.ligtning" color="amber" dark title="lightning immunes" class="mr-2" x-small><strong>{{ immunes.ligtning }}</strong></v-chip>
        <v-chip v-if="immunes.magic" color="purple" dark title="magic immunes" class="mr-2" x-small><strong>{{ immunes.magic }}</strong></v-chip>
        <v-chip v-if="immunes.physical" color="brown" dark title="physical immunes" class="mr-2" x-small><strong>{{ immunes.physical }}</strong></v-chip>
        <v-chip v-if="immunes.poison" color="green" dark title="poison immunes" class="mr-2" x-small><strong>{{ immunes.poison }}</strong></v-chip>
      </div>
      <div v-else class="align-self-baseline">
        no immunes
      </div>
    </div>
    <v-data-table
      disable-pagination
      hide-default-footer
      :headers="headers"
      :items="mobs"
      dense
    >
      <template v-slot:item.cold="{ item }">
        <v-chip v-if="item.cold >= 100" color="blue" dark><strong>{{ item.cold }}</strong></v-chip>
        <v-chip v-else-if="item.cold >= 75" color="blue lighten-3">{{ item.cold }}</v-chip>
        <v-chip v-else-if="item.cold >= 50" color="blue lighten-4">{{ item.cold }}</v-chip>
        <v-chip v-else-if="item.cold >= 1" color="blue lighten-5">{{ item.cold }}</v-chip>
        <v-chip v-else color="white">{{ item.cold }}</v-chip>
      </template>
      <template v-slot:item.fire="{ item }">
        <v-chip v-if="item.fire >= 100" color="red" dark><strong>{{ item.fire }}</strong></v-chip>
        <v-chip v-else-if="item.fire >= 75" color="red lighten-3">{{ item.fire }}</v-chip>
        <v-chip v-else-if="item.fire >= 50" color="red lighten-4">{{ item.fire }}</v-chip>
        <v-chip v-else-if="item.fire >= 1" color="red lighten-5">{{ item.fire }}</v-chip>
        <v-chip v-else color="white">{{ item.fire }}</v-chip>
      </template>
      <template v-slot:item.lightning="{ item }">
        <v-chip v-if="item.lightning >= 100" color="amber"><strong>{{ item.lightning }}</strong></v-chip>
        <v-chip v-else-if="item.lightning >= 75" color="amber lighten-3">{{ item.lightning }}</v-chip>
        <v-chip v-else-if="item.lightning >= 50" color="amber lighten-4">{{ item.lightning }}</v-chip>
        <v-chip v-else-if="item.lightning >= 1" color="amber lighten-5">{{ item.lightning }}</v-chip>
        <v-chip v-else color="white">{{ item.lightning }}</v-chip>
      </template>
      <template v-slot:item.magic="{ item }">
        <v-chip v-if="item.magic >= 100" color="purple" dark><strong>{{ item.magic }}</strong></v-chip>
        <v-chip v-else-if="item.magic >= 75" color="purple lighten-3">{{ item.magic }}</v-chip>
        <v-chip v-else-if="item.magic >= 50" color="purple lighten-4">{{ item.magic }}</v-chip>
        <v-chip v-else-if="item.magic >= 1" color="purple lighten-5">{{ item.magic }}</v-chip>
        <v-chip v-else color="white">{{ item.magic }}</v-chip>
      </template>
      <template v-slot:item.physical="{ item }">
        <v-chip v-if="item.physical >= 100" color="brown" dark><strong>{{ item.physical }}</strong></v-chip>
        <v-chip v-else-if="item.physical >= 75" color="brown lighten-3">{{ item.physical }}</v-chip>
        <v-chip v-else-if="item.physical >= 50" color="brown lighten-4">{{ item.physical }}</v-chip>
        <v-chip v-else-if="item.physical >= 1" color="brown lighten-5">{{ item.physical }}</v-chip>
        <v-chip v-else color="white">{{ item.physical }}</v-chip>
      </template>
      <template v-slot:item.poison="{ item }">
        <v-chip v-if="item.poison >= 100" color="green" dark><strong>{{ item.poison }}</strong></v-chip>
        <v-chip v-else-if="item.poison >= 75" color="green lighten-3">{{ item.poison }}</v-chip>
        <v-chip v-else-if="item.poison >= 50" color="green lighten-4">{{ item.poison }}</v-chip>
        <v-chip v-else-if="item.poison >= 1" color="green lighten-5">{{ item.poison }}</v-chip>
        <v-chip v-else color="white">{{ item.poison }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'MapRes',
  props: [
    'mapData', 
    'convictionResistance', 
    'lowerResResistance', 
    'grimWardResistance',
    'hasAmplifyDamage',
    'hasDecrepify',
    'coldPierce', 
    'firePierce', 
    'lightningPierce', 
    'poisonPierce',
    'mapColdResistance',
    'mapFireResistance',
    'mapLightningResistance',
    'mapMagicResistance',
    'mapPhysicalResistance',
    'mapPoisonResistance'
  ],
  data: () => ({
    headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Model', value: 'model' },
          { text: 'Cold', value: 'cold' },
          { text: 'Fire', value: 'fire' },
          { text: 'Lightning', value: 'lightning' },
          { text: 'Magic', value: 'magic' },
          { text: 'Physical', value: 'physical' },
          { text: 'Poison', value: 'poison' }
        ]
  }),
  methods: {
    applyResistanceReduction: function (mobResistance, immuneBreakingResistance, pierceResistance) {
      let modifiedMobResistance = mobResistance;
      let negativePierceResistance = pierceResistance > 0 ? pierceResistance * -1 : pierceResistance; // ensure pierce is negative
      if (modifiedMobResistance >= 100) immuneBreakingResistance = Math.ceil(immuneBreakingResistance / 5); // apply immune penalty
      modifiedMobResistance += immuneBreakingResistance;
      if (modifiedMobResistance <= 99) modifiedMobResistance += negativePierceResistance; // apply pierce only if not immune
      modifiedMobResistance = Math.max(modifiedMobResistance, 0); // minimum mob res zero
      return modifiedMobResistance;
    }
  },
  computed: {
    mobs: function () {
      let ampResistance = this.hasAmplifyDamage ? -100 : 0;
      let decrepifyResistance = this.hasDecrepify ? -50 : 0;
      let mobs = [];
      for (let m = 0; m < this.mapData.mobs.length; m++) {
        let mob = { ...this.mapData.mobs[m] }; // copy by value
        mob.cold = this.applyResistanceReduction(mob.cold + this.mapColdResistance, this.convictionResistance + this.lowerResResistance, this.coldPierce);
        mob.fire = this.applyResistanceReduction(mob.fire + this.mapFireResistance, this.convictionResistance + this.lowerResResistance, this.firePierce);
        mob.lightning = this.applyResistanceReduction(mob.lightning + this.mapLightningResistance, this.convictionResistance + this.lowerResResistance, this.lightningPierce);
        mob.magic = this.applyResistanceReduction(mob.magic + this.mapMagicResistance, 0, 0);
        mob.physical = this.applyResistanceReduction(mob.physical + this.mapPhysicalResistance, this.grimWardResistance + ampResistance + decrepifyResistance, 0);
        mob.poison = this.applyResistanceReduction(mob.poison + this.mapPoisonResistance, this.lowerResResistance, this.poisonPierce);
        mobs.push(mob);
      }
      return mobs;
    },
    immunes: function () {
      let immunes = {
        cold: this.mobs.filter((mob) => mob.cold >= 100).length,
        fire: this.mobs.filter((mob) => mob.fire >= 100).length,
        lightning: this.mobs.filter((mob) => mob.lightning >= 100).length,
        magic: this.mobs.filter((mob) => mob.magic >= 100).length,
        physical: this.mobs.filter((mob) => mob.physical >= 100).length,
        poison: this.mobs.filter((mob) => mob.poison >= 100).length,
      };
      immunes.count = immunes.cold + immunes.fire + immunes.lightning + immunes.magic + immunes.physical + immunes.poison;
      return immunes;
    }
  }
};
</script>
