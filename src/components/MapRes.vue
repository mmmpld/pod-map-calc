<template>
  <div>
    <h2>{{mapData.title}}</h2>
    <v-data-table
      :headers="headers"
      :items="mobs"
    >
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
    }
  }
};
</script>
