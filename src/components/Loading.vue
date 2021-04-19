<template>
  <v-app>
    <div
      id="loading"
      justify="center"
      align="center"
    >
      <v-img
        :src="require('@/assets/images/pokeball.svg')"
        class="pokeball mb-15"
        width="106"
        max-height="106"
        contain
      />
    </div>
  </v-app>
</template>

<script>
import api from '../api/api';
export default {
	name: 'Loading',

  mounted(){
    this.getPokemons();
  },

  methods: {
    async getPokemons () {
      const pokemons = await api.getPokemons();
      if (pokemons) {
        this.$store.commit('SET_POKEMONS', pokemons.data.results);
        setTimeout(() => {
          this.$router.push('/pokemons')
        }, 2000);
      }
    },
  }
};
</script>

<style lang="scss">
  #loading{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p{
    max-width: 570px;
  }
.pokeball {
  animation: fall .25s ease-in-out,
             shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite;
}
@keyframes shake {
  0% { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
}
@keyframes fall {
  0% { top: -200px }
  60% { top: 0 }
  80% { top: -20px }
  100% { top: 0 }
}
</style>
