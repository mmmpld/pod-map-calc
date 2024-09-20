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

describe('farm resistances should be static', () => {
  it('has not changed', async () => {
    const farmTabButton = wrapper.find('[data-testid="farm-tab-button"]')
    expect(farmTabButton.exists())
    await farmTabButton.trigger('click')
    expect(wrapper.find('.farms-tab').html()).toMatchSnapshot()
  })
})
