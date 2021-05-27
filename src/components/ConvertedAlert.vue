<template>
  <v-row justify="center">
    <v-alert text outlined color="indigo" icon="mdi-progress-check" transition="scale-transition">
      <v-row align="center">
        <v-col class="grow">
          <div class="title">Here's your answer :</div>
          <p>{{ convertedNumber }}</p>
        </v-col>
        <v-col class="shrink">
          <v-btn color="indigo" @click="$emit('isClicked')" icon>
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-row>
</template>
<script>
export default {
  name: 'Converted-number-alert',
  props: {
    convertedNumber: String,
  },
  emits: ['isClicked'],
}
</script>
