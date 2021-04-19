<template>
  <div
    class="itemList"
  >
    <span @click="setPokemon(item)">{{item.name}}</span>
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
import api from '../../api/api';

export default {
  name: 'ItemList',

  props: [
    'item'
  ],

  data: () => ({
    favorites: [],
    fav: false
  }),

  watch: {
      '$store.getters.getFavorites': function() {
        if (this.item.name == this.$store.getters.getPokemon["name"]) {
          //this.setFav(this.item.name)
          this.fav = !this.fav;
        }
      },
  },

  mounted (){
    this.fav = this.item.fav;
  },

  methods: {
    setFav (pokemon) {
      this.fav = !this.fav;
      if (this.fav) {
        this.$store.commit('SET_FAVORITE', pokemon);
      } else {
        this.$store.commit('DELETE_FAVORITE', pokemon);
      }
    },

    async setPokemon (pokemon) {
      const pokemonResult = await api.getPokemon(pokemon.name);
      if (pokemonResult) {
        pokemonResult.data.fav = this.fav;
        this.$store.commit('SET_POKEMON', pokemonResult.data);
      }
    }
  }
}
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
      display: block;
      cursor: pointer;
      transition:0.5s;
      &:hover{
        color: red;
      }
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
