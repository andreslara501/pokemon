<template>
  <v-dialog
    v-model="show"
    width="600px"
    @click:outside="close()"
  >
    <v-card v-if="pokemon">
      <v-img
        height="250"
        :src="require('@/assets/images/background.png')"
      >
        <v-img
          height="26"
          class="mt-7 close"
          contain
          :src="require('@/assets/images/icons/close.svg')"
          content
          @click="close()"
        />
        <v-img
          height="200"
          class="mt-7"
          contain
          :src="`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`"
          content
        />
      </v-img>
      <v-card-title>
        <span class="headline">{{pokemon.name}}</span>
      </v-card-title>
      <v-card-text>
        <ul id="list-skills" v-if="pokemon.forms">
          <li><strong>Name: </strong>{{pokemon.name}}</li>
          <li><strong>Weight: </strong>{{pokemon.weight}}</li>
          <li><strong>Height: </strong>{{pokemon.height}}</li>
          <li><strong>Types: </strong>{{types.join(", ")}}</li>
        </ul>
      </v-card-text>
      <v-card-actions>
      <v-row class="mb-0">
        <v-col class="text-left">
          <input type="hidden" id="copy-input" v-model="copyText">
          <v-btn
            depressed
            rounded
            @click="copy('hola mundito')"
          >
            Share to my friends
          </v-btn>
        </v-col>
        <v-col>
          <div
            class="star"
            @click="setFav(pokemon.name)"
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
        </v-col>
      </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Basic',

  data: () => ({
    show: false,
    pokemon: {},
    types: [],
    fav: false,
    copyText: '',
  }),

  watch: {
    '$store.getters.getPokemon': function() {
      this.show = true;
      this.pokemon = this.$store.getters.getPokemon;
      if (this.pokemon.types) {
        this.getTypes(this.pokemon.types)
      }
      this.fav = this.pokemon.fav
    }
  },

  methods: {
    close () {
      this.show = false;
      this.$store.commit('SET_POKEMON', false);
    },
    getTypes (types) {
      types.map((type) => {
        this.types.push(type.type.name);
      })
      return this.types.join(", ")
    },
    setFav (pokemon) {
      this.fav = !this.fav;
      if (this.fav) {
        this.$store.commit('SET_FAVORITE', pokemon);
      } else {
        this.$store.commit('DELETE_FAVORITE', pokemon);
      }
    },
    copy(){
      let copyTextToCopy = document.querySelector('#copy-input')
      copyTextToCopy.value = `Name: ${this.pokemon.name}, Weigth: ${this.pokemon.weight}, Height: ${this.pokemon.height}, Types: ${this.types.join(", ")}`;
      copyTextToCopy.setAttribute('type', 'text')
      copyTextToCopy.select()

      try {
        document.execCommand('copy');
      } catch (err) {
        alert('Oops, unable to copy');
      }

      /* unselect the range */
      copyTextToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }
  }
};
</script>

<style lang="scss">
  #list-skills{
    list-style: none;
    text-align: left;
    padding-left: 0px;
    font-size: 18px;
    li {
      padding: 14px 0px;
      border-bottom: 1px solid #E8E8E8;
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
  .close{
    position: absolute;
    right: 15px;
    top: -12px;
    cursor: pointer;
  }
</style>
