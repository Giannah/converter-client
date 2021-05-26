<template>
  <v-col cols="12" class="mb-2">
    <v-img :src="require('../assets/romancharacter.svg')" class="my-1" contain height="300" />

    <h1 class="display-2 font-weight-bold mb-3">Welcome to the AToR Converter !</h1>

    <p class="subheading font-weight-regular">
      Simply type in an arabic numeral from 1 to 100 and get it converted to it's roman numeral
      equivalent.
    </p>
  </v-col>
</template>
<script>
export default {
  name: 'deco',
}
</script>
