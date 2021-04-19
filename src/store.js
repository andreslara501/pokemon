import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: '',
    searchText: '',
    favorites: '[]',
    typeFilter: 0
  },

  mutations: {
    SET_POKEMONS: function(state, pokemons) {
      localStorage.setItem('pokemons', '');
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
      state.pokemons = pokemons;
    },
    SET_SEARCH_TEXT: function(state, searchText) {
      localStorage.setItem('searchText', searchText);
      state.searchText = searchText;
    },
    SET_FAVORITE: function(state, favorite) {
      let favorites = JSON.parse(state.favorites)
      favorites.push(favorite);
      state.favorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    DELETE_FAVORITE: function(state, favorite) {
      let favorites = JSON.parse(state.favorites)
      favorites = favorites.filter(e => e !== favorite);
      state.favorites = JSON.stringify(favorites);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    },
    SET_TYPE_FILTER: function(state, type) {
      localStorage.setItem('typeFilter', JSON.stringify(type));
      state.typeFilter = type;
    },
  },

  getters: {
    getPokemons: state => {
      if (localStorage.getItem('pokemons')) {
        state.pokemons = localStorage.getItem('pokemons');
      }
      return JSON.parse(state.pokemons);
    },
    getSearchText: state => {
      if (localStorage.getItem('searchText')) {
        state.searchText = localStorage.getItem('searchText');
      }
      return state.searchText;
    },
    getFavorites: state => {
      if (localStorage.getItem('favorites')) {
        state.favorites = localStorage.getItem('favorites');
      }
      return state.favorites;
    },
    getTypeFilter: state => {
      return state.typeFilter;
    },
  }
})
