<template>
  <v-app>
      <transition
        name="slide-x-transition"
        mode="out-in"
      >
        <router-view/>
      </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import '@/styles/basic.scss';
</style>
