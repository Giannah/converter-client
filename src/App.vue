<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo4.png')"
          transition="scale-transition"
          width="60"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink hidden-sm-and-down"
          contain
          min-width="100"
          :src="require('@/assets/ator-name.png')"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
    <v-footer dark padless app>
      <v-row justify="center" no-gutters>
        <v-col class="indigo py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} -
          <strong> Made by Claudine with <v-icon>mdi-cards-heart</v-icon></strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({}),
}
</script>
