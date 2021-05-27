<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="isLoading" persistent width="300" dark>
        <div class="text-center">
          <v-card color="indigo" dark>
            <v-card-title>Converting... </v-card-title>
            <v-card-text>
              <v-progress-circular
                indeterminate
                size="70"
                :width="7"
                color="white"
              ></v-progress-circular>
            </v-card-text>
          </v-card>
        </div>
      </v-dialog>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/romancharacter.svg')" class="my-1" contain height="300" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to the AToR Converter !</h1>

        <p class="subheading font-weight-regular">
          Simply type in an arabic numeral from 1 to 100 and get it converted to it's roman numeral
          equivalent.
        </p>
      </v-col>

      <v-col v-if="convertedNumber.length > 0" class="mb-5" cols="12">
        <converted-alert
          :convertedNumber="convertedNumber"
          @isClicked="handleClick"
        ></converted-alert>
      </v-col>

      <v-col v-if="errorMessage.length > 0" class="mb-5" cols="12">
        <error-alert :errorMessage="errorMessage" @isClicked="handleErrorMessage"></error-alert>
      </v-col>

      <v-col class="mb-5" cols="12" v-show="!convertedNumber && !errorMessage">
        <h2 class="headline font-weight-bold mb-3">Enter your number here ...</h2>

        <v-row justify="center">
          <v-col cols="12" sm="6" md="3">
            <v-form
              class="d-flex flex-row flex-nowrap align-baseline justify-space-around"
              ref="form"
            >
              <v-text-field
                data-test="input"
                v-model="value"
                class="mx-6 py-2"
                type="number"
                label="Arabic numeral"
                min="1"
                max="100"
                step="1"
                :rules="valueRules"
                @keydown.enter="submitForm"
                required
                outlined
              ></v-text-field>
              <v-btn color="indigo" fab dark class="py-2" @click="submitForm">Go !</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getRomanConversionService from '@/services/ConverterService.js'
import ConvertedAlert from '@/components/ConvertedAlert.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    ConvertedAlert,
    ErrorAlert,
  },
  data: () => ({
    value: '',
    isLoading: false,
    convertedNumber: '',
    errorMessage: '',
    valueRules: [
      (v) => !!v || 'Value is required',
      (v) => (v && /^[1-9][0-9]?$|^100$/gm.test(v)) || 'Value must be between 1 and 100',
    ],
  }),
  methods: {
    submitForm() {
      const apiClient = axios.create({
        baseURL: 'http://localhost:5000/rest/converter',
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const ConverterService = getRomanConversionService(apiClient)
      if (this.$refs.form.validate()) {
        this.isLoading = true
        ConverterService.getConvertedNumber({ input: this.value })
          .then((response) => {
            this.convertedNumber = response.data
            this.isLoading = false
          })
          .catch((error) => {
            this.errorMessage = `${error}`
            this.isLoading = false
          })
        this.$refs.form.reset()
      }
    },

    handleClick() {
      this.convertedNumber = ''
    },

    handleErrorMessage() {
      this.errorMessage = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.loading-dialog {
  background-color: #303030;
}
</style>
