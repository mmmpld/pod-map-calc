import mobs from './betaPodMobs'

export default [
  {
    title: 'Decomposing Settlement',
    areaLevel: 86,
    mobs: [
      mobs.map2_sandmaggot5,
      mobs.map2_overseer6,
      mobs.map1_minion5,
      mobs.map1_mummy5,
      mobs.map2_baboon5,
      mobs.map2_frogdemon3,
      mobs.map1_fetishshaman8,
      { ...mobs.map1_fetish8, note: 'Lil guy the shaman rides' },
      mobs.map1_putriddefiler5,
      mobs.map2_brute5,
    ]
  },
  {
    title: 'Baleful Alcazar',
    areaLevel: 86,
    mobs: [
      mobs.map3_zombie5,
      mobs.map3_bighead10,
      mobs.map3_sk_archer10,
      mobs.map2_skmage_fire7,
      mobs.map2_unraveler9,
      mobs.map2_deathmauler6,
      mobs.map1_frogdemon3,
      mobs.map1_slinger6,
      mobs.map2_pantherwoman6,
      mobs.map2_mosquito4,
    ]
  },
  {
    title: 'Abyssal Furnace',
    areaLevel: 87,
    mobs: [
      mobs.map2_goatman5,
      mobs.map_vulture5,
      mobs.map4_sandraider7,
      mobs.map2_wraith5,
      mobs.map2_zealot5,
      mobs.map2_brute1,
      mobs.map3_cantor6,
      mobs.map2_thornhulk4,
      mobs.map2_sandleaper5,
      mobs.map3_willowisp5
    ]
  },
  {
    title: 'Dim Cellar',
    areaLevel: 87,
    mobs: [
      mobs.map2_blunderbore5,
      mobs.map2_batdemon7,
      mobs.map1_sandraider5,
      mobs.map1_bighead7,
      mobs.map2_sk_archer10,
      mobs.map3_arach5,
      mobs.map2_scarab5,
      mobs.map1_bloodlord7,
      mobs.map1_mosquito4,
      mobs.map1_quillrat5,
    ]
  },
  {
    title: 'Icy Cavern',
    areaLevel: 87,
    mobs: [
      mobs.map1_blunderbore5,
      mobs.map2_zombie5,
      mobs.map1_doomknight2,
      mobs.map2_snowyeti4,
      mobs.map2_suicideminion8,
      mobs.map1_deathmauler6,
      mobs.map2_quillrat5,
      mobs.map1_wraith5,
      mobs.map2_putriddefiler5,
      mobs.map3_mummy6,
    ]
  },
  {
    title: 'Desecrated Temple',
    areaLevel: 87,
    mobs: [
      mobs.map2_cantor4,
      mobs.map2_cr_archer5,
      mobs.map2_corruptrogue4,
      mobs.map3_sandraider7,
      mobs.map1_zealot5,
      mobs.map3_unraveler9,
      mobs.map1_baboon8,
      mobs.map1_thornhulk4,
      mobs.map1_goatman5,
      mobs.map1_swarm4,
    ]
  },
  {
    title: 'Musty Crypt',
    areaLevel: 88,
    mobs: [
      mobs.map3_batdemon7,
      mobs.map2_councilmember3,
      mobs.map1_megademon6,
      mobs.map2_vampire5,
      mobs.map2_arach5,
      mobs.map2_clawviper5,
      mobs.map2_reanimatedhorde6,
      mobs.map2_mummy6,
      mobs.map1_foulcrow8,
      mobs.map1_vilechild3,
    ]
  },
  {
    title: 'Frigid Plateau',
    areaLevel: 88,
    mobs: [
      mobs.map2_succubus5,
      mobs.map5_dkmag3,
      mobs.map2_siegebeast5,
      mobs.map1_vilemother3,
      mobs.map1_frozenhorror5,
      mobs.map1_imp5,
      mobs.map1_reanimatedhorde6,
      mobs.map1_fallenshaman5,
      mobs.map1_fallen5,
      mobs.map2_bloodlord7,
    ]
  },
  {
    title: 'Forgotten Desert',
    areaLevel: 88,
    mobs: [
      mobs.map2_fingermage3,
      mobs.map1_unraveler9,
      mobs.map2_skeleton4,
      mobs.map2_willowisp5,
      mobs.map1_arach5,
      mobs.map1_clawviper10,
      mobs.map1_overseer6,
      mobs.map1_sandleaper5,
      mobs.map1_slinger9,
      mobs.map1_scarab5,
    ]
  },
  {
    title: 'Burnt Forest',
    areaLevel: 88,
    mobs: [
      mobs.map1_fingermage5,
      mobs.map2_megademon6,
      mobs.map1_dkmag3,
      mobs.map1_regurgitator3,
      mobs.map2_bighead10,
      mobs.map1_sk_archer11,
      mobs.map1_skmage_fire7,
      mobs.map1_skeleton5,
      mobs.map1_siegebeast5,
      mobs.map1_vampire9,
    ]
  },
  {
    title: 'Ruined Citadel',
    areaLevel: 88,
    mobs: [
      mobs.map3_blunderbore6,
      mobs.map1_willowisp4,
      mobs.map1_batdemon7,
      mobs.map1_succubus8,
      mobs.map1_cantor6,
      mobs.map1_cr_archer5,
      mobs.map1_corruptrogue4,
      mobs.map2_sandraider7,
      mobs.map1_councilmember3,
      mobs.map1_zombie5,
    ]
  },
  {
    title: 'Pleasant Pasture',
    areaLevel: 86,
    mobs: [
      { id: 'hellbovine', model: 'Hell Bovine', type: 'Animal' }
    ]
  }
]
