import axios from 'axios'

const urlBase = 'http://lara.com.co/'

const configService = axios.create({
  baseURL: urlBase
});

const suggestApi = {
  async getSuggest (query) {
    return await configService(`proxy_search.php?search=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(function (error) {
      //router.push('/')
      return error.response
    })
  }
}

export default suggestApi
