<template>
  <div class="container">
    <div class="cards">DISLIKE
      <template v-for="card in dislikedCards">
        <card-content :card="card"></card-content>
      </template>
    </div>
    <div class="deck">DECK
      <div class="card"
        v-for="card in allCards"
        v-swipe.left.right
        @swipe-left="addToDislikedCards(card)"
        @swipe-right="addToLikedCards(card)">
        <card-content :card="card"></card-content>
      </div>
    </div>
    <div class="cards">LIKE
      <template v-for="card in likedCards">
        <card-content :card="card"></card-content>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import swipe from '../directives/swipe'
import cardContent from './cards/Content'

export default {
  name: 'HelloWorld',
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
  margin-top: 50px;
}

.container > div:not(:last-child) {
  margin-right: 150px;
}

.deck, .cards {
  display: flex;
  flex-direction: column;
}

.deck {
  flex: 0 0 300px;
  height: 400px;
}

.deck .card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 400px;
}

.cards {
  background: beige;
  flex: 0 0 195px;
  height: 260px;
}

.card {
  background: lightblue;
  display: none;
  flex-direction: column;
}

.card img {
  height: 200px;
  width: 100%;
}

.card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 260px;
}

.card:nth-of-type(1) {
  transform: scale(1);
  z-index: 3;
}

.card:nth-of-type(2) {
  transform: scale(0.9) translate(0, -125%);
  z-index: 2;
}

.card:nth-of-type(3) {
  transform: scale(0.8) translate(0, -280%);
  z-index: 1;
}
</style>
