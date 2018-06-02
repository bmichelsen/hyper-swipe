<template>
  <div class="container">
    <div class="cards swiped">DISLIKE
      <template v-for="card in dislikedCards">
        <card-content :card="card"></card-content>
      </template>
    </div>
    <div class="cards deck">DECK
      <div class="card" v-for="card in allCards">
        <div @mousedown="mouseDown" @mousemove="mouseMove(card, $event)" :style="`transform: translate(${mouse.distance * -1}px)`">
          <card-content :card="card"></card-content>
        </div>
      </div>
    </div>
    <div class="cards swiped">LIKE
      <template v-for="card in likedCards">
        <card-content :card="card"></card-content>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  methods: {
    ...mapActions([
      'addToLikedCards',
      'addToDislikedCards'
    ]),
    mouseDown (e) {
      this.mouse.down = true
      this.mouse.clicked = e.clientX
    },
    mouseMove (card, e) {
      if (this.mouse.down) {
        this.mouse.distance = this.mouse.clicked - e.clientX

        if (this.mouse.distance > 100) {
          this.addToDislikedCards(card)
          this.mouseUp()
        } else if (this.mouse.distance < -100) {
          this.addToLikedCards(card)
          this.mouseUp()
        }
      }
    },
    mouseUp () {
      this.mouse.down = false
      this.mouse.clicked = 0
      this.mouse.distance = 0
    }
  },
  computed: {
    ...mapGetters([
      'allCards',
      'likedCards',
      'dislikedCards'
    ])
  },
  mounted () {
    window.addEventListener('mouseup', this.mouseUp)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 50px;
}

.container > .cards {
  flex: 0 0 300px;
  height: 400px;
  margin: 0 75px;
}


.deck, .swiped {
  display: flex;
  flex-direction: column;
}

.deck .card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 400px;
}

.swiped .card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 260px;
}

.card {
  background: lightblue;
  display: none;
  flex-direction: column;
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

.card img {
  width: 100%;
}

.container .swiped {
  background: beige;
  flex: 0 0 195px;
  height: 260px;
}
</style>
