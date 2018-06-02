<template>
  <div class="container">
    <div v-if="dislikedCards && dislikedCards.length > 0" class="cards">
      <template v-for="card in dislikedCards">
        <card-content :card="card"></card-content>
      </template>
    </div>
    <div v-else class="cards center-content">
      <p class="card-text">Dislike</p>
    </div>
    <div class="deck">
      <template v-for="card in allCards">
        <card-content
          v-swipe.left.right
          @swipe-left="addToDislikedCards(card)"
          @swipe-right="addToLikedCards(card)"
          :card="card">
        </card-content>
      </template>
    </div>
    <div v-if="likedCards && likedCards.length > 0" class="cards">
      <template v-for="card in likedCards">
        <card-content :card="card"></card-content>
      </template>
    </div>
    <div v-else class="cards center-content">
      <p class="card-text">Like</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import swipe from '../../directives/swipe'
import cardContent from './Content'

export default {
  name: 'CardSection',
  data () {
    return {
      mouse: {
        down: false,
        clicked: 0,
        distance: 0
      }
    }
  },
  components: {
    cardContent
  },
  directives: {
    swipe
  },
  methods: {
    ...mapActions([
      'addToLikedCards',
      'addToDislikedCards'
    ])
  },
  computed: {
    ...mapGetters([
      'allCards',
      'likedCards',
      'dislikedCards'
    ])
  }
}
</script>

<style scoped>
.container {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
}

.container > div:not(:last-child) {
  margin-right: 150px;
}

.deck, .cards {
  display: flex;
  flex-direction: column;
}

.deck {
  border-radius: 10px;
  box-shadow: 0 22px 44px 0 #000000;
  flex: 0 0 300px;
  height: 400px;
}

.cards {
  align-items: center;
  background-clip: content-box, border-box;
  background-image: linear-gradient(#0f0124, #0f0124), linear-gradient(143deg, #c44aff, #9224ff);
  background-origin: border-box;
  border: solid 1px transparent;
  border-radius: 10px;
  box-shadow: 0 15px 29px 0 #000000;
  flex: 0 0 195px;
  height: 260px;
  transform: translate(0, -10px);
}

.card-text {
  background-clip: text;
  background-image: linear-gradient(94deg, #10b3fe, #1ce6fa);
  font: 800 2.25rem Nunito, sans-serif;
  letter-spacing: 0.8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 22px 44px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
}
</style>
