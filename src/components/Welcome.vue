<template>
  <v-app>
    <div
      id="welcome"
      justify="center"
      align="center"
    >
      <div class="content">
        <v-img
          :src="require('@/assets/images/welcome.png')"
          class="pikachu mb-15"
          width="272"
          max-height="272"
          contain
        />
        <h2 class="mb-5">Welcome to Pokédex</h2>
        <p class="mb-10">
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
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
  </v-app>
</template>

<script>
export default {
	name: 'Welcome',
};
</script>

<style lang="scss">
  #app{
    text-align: center;
  }
  #welcome{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
