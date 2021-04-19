<template>
  <div id="navBar">
    <div class="content">
      <v-row>
        <v-col>

          <v-btn
            :class="(!this.$store.getters.getTypeFilter) ? 'gray':''"
            depressed
            rounded
            block
            @click="select(1)"
          >
            <img :src="require('@/assets/images/icons/btnAll.svg')"/>
            All
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :class="(this.$store.getters.getTypeFilter) ? 'gray':''"
            depressed
            rounded
            block
            @click="select(0)"
          >
            <img :src="require('@/assets/images/icons/btnFavorites.svg')"/>
            Favorites
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  methods: {
    async select (type) {
      this.$store.commit('SET_TYPE_FILTER', type);
    },
  }
};
</script>

<style lang="scss" scoped>
  .v-btn img{
    width: 20px;
    margin-right: 8px;
  }
  #navBar{
    background: #FFF;
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
    padding: 15px 20px;
    margin: 0px -40px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
</style>
