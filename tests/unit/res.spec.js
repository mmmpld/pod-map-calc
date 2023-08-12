import { describe, it, expect } from 'vitest'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from '@/App.vue'
import { mount, createLocalVue } from '@vue/test-utils'
Vue.use(Vuetify)
const localVue = createLocalVue()
const vuetify = new Vuetify()
const wrapper = mount(App, {
  localVue,
  vuetify
})

describe('map resistances should be static', () => {
  it('has not changed', () => {
    expect(wrapper.find('.maps-tab').html()).toMatchSnapshot()
  })
})
