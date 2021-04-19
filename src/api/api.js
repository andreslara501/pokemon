import axios from 'axios'
import router from '../router';

const urlBase = 'https://pokeapi.co/api/v2/'

const configService = axios.create({
  baseURL: urlBase
});

const api = {
  async getPokemons () {
    return await configService(`pokemon?limit=1117`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(function (error) {
      router.push('/')
      return error.response
    })
  },
  async getPokemon (pokemon) {
    return await configService(`pokemon/${pokemon}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(function (error) {
      return error.response
    })
  }
}

export default api
