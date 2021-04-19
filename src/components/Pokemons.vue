<template>
  <div>
    <div
      id="pokemons"
      class="content"
    >
      <InputSearch/>
      <div
        v-if="pokemonsFiltered.length > 0"
        id="pokemons-list"
      >
        <ItemList
          v-for="pokemon in pokemonsFiltered"
          :key="pokemon.name"
          :item="pokemon"
        />
      </div>
      <div v-else>
        <div
          v-if="suggestQuery"
          class="mb-10"
        >
          Maybe you wanted to say "<a @click="changeUrl">{{suggestQuery}}</a>"?
        </div>
        <h1>Uh-oh!</h1>
        <p class="second">
          You look lost on your journey!
        </p>
        <v-btn
          to="/loading"
          depressed
          rounded
        >
          Get started
        </v-btn>
      </div>
    </div>
    <NavBar/>
  </div>
</template>

<script>
import InputSearch from './presentational/InputSearch'
import NavBar from './presentational/NavBar'
import ItemList from './presentational/ItemList'

import suggestApi from '../api/suggest';

export default {
  name: 'Pokemons',

  components: {
    InputSearch,
    NavBar,
    ItemList
  },

  props: ['search'],

  data: () => ({
    pokemons: {},
    pokemonsFiltered: {},
    textSearch: '',
    favorites: [],
    suggestQuery: ''
  }),

  watch: {
    '$store.getters.getSearchText': function() {
      if (this.$store.getters.getSearchText) {
        this.$router.replace(`/pokemons/search/${this.$store.getters.getSearchText}`)
      } else {
        this.$router.replace("/pokemons/")
      }
      this.textSearch = this.$store.getters.getSearchText;
      this.filterPokemons();
    },
    '$store.getters.getTypeFilter': function() {
      this.favorites = this.$store.getters.getFavorites;
      this.pokemons = this.$store.getters.getPokemons;
      this.assignFavs();
      this.filterPokemons();
    },
  },

  mounted(){
    if (this.$route.params.search) {
      this.$store.commit('SET_SEARCH_TEXT', this.$route.params.search);
    }
    this.restorePokemons();
    this.filterPokemons();
  },

  methods: {
    restorePokemons () {
      this.favorites = this.$store.getters.getFavorites;
      this.pokemons = this.$store.getters.getPokemons;
      this.assignFavs();
    },
    filterPokemons () {
      if (this.$store.getters.getSearchText.length) {
        this.pokemonsFiltered = this.pokemons.filter(pokemon => {
          if (!this.$store.getters.getTypeFilter) {
            if (pokemon.fav) {
              const pokemonLowCase = pokemon.name.toLowerCase();
              return pokemonLowCase.indexOf(this.$store.getters.getSearchText) > -1;
            }
          } else {
            const pokemonLowCase = pokemon.name.toLowerCase();
            return pokemonLowCase.indexOf(this.$store.getters.getSearchText) > -1;
          }
        });
      } else {
        if (!this.$store.getters.getTypeFilter) {
          this.pokemonsFiltered = this.pokemons.filter(pokemon => {
            if (pokemon.fav) {
              return pokemon;
            }
          })
        } else {
          this.pokemonsFiltered = this.pokemons;
        }
      }

      if (this.pokemonsFiltered.length == 0) {
        this.suggest();
      }
    },
    assignFavs () {
      this.pokemons = this.pokemons.map((pokemon) => {
        if (this.favorites.indexOf(pokemon.name) > -1) {
          pokemon.fav = true;
        } else {
          pokemon.fav = false;
        }
        return pokemon;
      });
    },
    async suggest () {
      const suggest = await suggestApi.getSuggest(this.$store.getters.getSearchText)
      if (suggest.data[1].length) {
        const suggestResult = this.pokemons.filter(pokemon => {
          const pokemonLowCase = pokemon.name.toLowerCase();
          return pokemonLowCase.indexOf(suggest.data[1][0]) > -1;
        });

        if (suggestResult.length) {
          this.suggestQuery = suggest.data[1][0];
        }
      } else {
        this.suggestQuery = '';
      }
    },
    changeUrl () {
      this.$store.commit('SET_SEARCH_TEXT', this.$route.params.search);
      this.pokemons = this.$store.getters.getPokemons;
      this.assignFavs();
      this.filterPokemons();
      window.location = `/pokemons/search/${this.suggestQuery}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  #pokemons-list{
    margin-bottom: 200px;
  }
</style>
+