<template>
  <div class="itemList">
    <span>{{item.name}}</span>
    <div
      class="star"
      @click="setFav(item.name)"
    >
      <img
        v-if="fav"
        :src="require('@/assets/images/icons/fav.svg')"
      />
      <img
        v-else
        :src="require('@/assets/images/icons/noFav.svg')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',

  props: [
    'item'
  ],

  data: () => ({
    favorites: [],
    fav: false
  }),

  mounted (){
    this.fav = this.item.fav;
  },

  methods: {
    setFav(pokemon){
      this.fav = !this.fav;
      if (this.fav) {
        this.$store.commit('SET_FAVORITE', pokemon);
      } else {
        this.$store.commit('DELETE_FAVORITE', pokemon);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .itemList{
    color: $color1;
    background: white;
    padding: 8px 10px;
    font-size: 22px;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: left;
    text-transform: capitalize;
    display: flex;
    span{
      padding: 5px 10px;
    }
  }
  .star{
    width: 44px;
    height: 44px;
    background: $color5;
    border-radius: 100%;
    text-align: center;
    margin-left: auto;
    transition: transform .2s;
    cursor: pointer;
    img{
      width: 26px;
      height: 26px;
      margin-top: 8px;
      position: relative;
      top: 0px;
    }
    &.favorite{
      color: #BFBFBF;
    }
    &:hover{
      transform: scale(1.5);
    }
  }
</style>
