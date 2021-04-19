<template>
  <div id="inputSearch">
    <v-text-field
      v-model="text"
      solo
      label="Search"
      clearable
      prepend-inner-icon="mdi-magnify"
      @keyup="updateInputSearch"
      @click:clear="clearText()"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSearch',

  data: () => ({
    text: ''
  }),

  mounted (){
    this.text = this.$store.getters.getSearchText;
  },

  methods: {
    updateInputSearch () {
      if (this.text != null) {
        this.$store.commit('SET_SEARCH_TEXT', this.text);
      }
    },
    clearText () {
      this.$store.commit('SET_SEARCH_TEXT', '');
    }
  }
};
</script>

<style lang="scss" scoped>
  #inputSearch{
    margin-bottom: 13px;
  }
</style>
