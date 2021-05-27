import Vue from 'vue'
import axios from 'axios'
import getRomanConversionService from '@/services/ConverterService.js'

const Dependencies = {
  install: (Vue) => {
    Vue.mixin({
      beforeCreate() {
        const apiClient = axios.create({
          baseURL: 'http://localhost:5000/rest/converter',
          withCredentials: false,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        this.$converterService = getRomanConversionService(apiClient)
      },
    })
  },
}
Vue.use(Dependencies)

export default Dependencies
