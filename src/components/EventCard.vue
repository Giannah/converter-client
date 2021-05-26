<template>
  <v-card class="mx-auto text-left" max-width="400" v-if="conversions.length > 0" tile flat>
    <v-toolbar color="indigo lighten-1" class="white--text">
      <v-toolbar-title>Made by AToR converter</v-toolbar-title>
    </v-toolbar>
    <v-list dense>
      <v-subheader>LATEST CONVERSIONS</v-subheader>
      <v-list-item v-for="conversion in conversions" :key="conversion.id">
        <v-list-item-icon>
          <v-icon small>mdi-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="conversion"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: 'Event-card',
  props: {
    conversions: Array,
  },
}
</script>
