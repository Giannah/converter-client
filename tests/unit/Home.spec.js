import Vue from 'vue'
import Vuetify from 'vuetify'

import getRomanConversionService from '@/services/ConverterService.js'

import Home from '@/components/Home.vue'

import { createLocalVue, mount } from '@vue/test-utils'

Vue.use(Vuetify)
const localVue = createLocalVue()

describe('Home', () => {
  let vuetify
  let apiClient
  let ConverterService
  let wrapper

  const mockGetConvertedNumber = jest.fn()

  apiClient = {
    post: Promise.resolve({ data: 'I' }),
  }

  ConverterService = getRomanConversionService(apiClient)

  jest.mock('@/services/ConverterService.js', () => {
    return jest.fn().mockImplementation(() => {
      mockGetConvertedNumber
    })
  })

  beforeEach(() => {
    vuetify = new Vuetify()
    wrapper = mount(Home, {
      localVue,
      vuetify,
      apiClient,
      ConverterService,
    })
  })

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Input', async () => {
    const input = wrapper.find('[data-test="input"]')
    await input.setValue('1')

    expect(input.element.value).toBe('1')
  })

  it('triggers submit event', async () => {
    const input = wrapper.find('[data-test="input"]')
    await input.setValue('1')

    const button = wrapper.find('.v-btn')

    button.trigger('click')
  })
})
