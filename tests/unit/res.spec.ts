import { describe, it, expect } from 'vitest'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import { mount } from '@vue/test-utils'

const wrapper = mount(App, {
  global: {
    plugins: [
      vuetify
    ]
  }
})

describe('map resistances should be static', () => {
  it('has not changed', async () => {
    const mapsTabButton = wrapper.find('[data-testid="maps-tab-button"]')
    expect(mapsTabButton.exists())
    await mapsTabButton.trigger('click')
    expect(wrapper.find('.maps-tab').html()).toMatchSnapshot()
  })
})
