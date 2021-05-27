<template>
  <v-row justify="center">
    <v-alert text outlined color="red" icon="mdi-progress-check" transition="scale-transition">
      <v-row align="center">
        <v-col class="grow">
          <div class="title">Oups...something went wrong !</div>
          <p>{{ errorMessage }}</p>
          <p>Please try again.</p>
        </v-col>
        <v-col class="shrink">
          <v-btn color="red" @click="$emit('isClicked')" icon>
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </v-row>
</template>
<script>
export default {
  name: 'Error-alert',
  props: {
    errorMessage: String,
  },
  emits: ['isClicked'],
}
</script>
