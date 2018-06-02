<template>
  <div class="hello">
    <div class="container">
      <div class="cards liked">LIKE
        <div class="card" v-for="card in liked">
          <img :src=card.image />
          <h4>{{ card.title }}</h4>
          <p>{{ card.body }}</p>
        </div>
      </div>
      <div class="cards deck">DECK
        <div class="card" v-for="card in cards">
          <img :src=card.image />
          <h4>{{ card.title }}</h4>
          <p>{{ card.body }}</p>
          <p>
            <button @click="likeCard(card)">Like</button>
            <button @click="dislikeCard(card)">Dislike</button>
          </p>
        </div>
      </div>
      <div class="cards disliked">DISLIKE
        <div class="card" v-for="card in disliked">
          <img :src=card.image />
          <h4>{{ card.title }}</h4>
          <p>{{ card.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _cards from '../api/cards.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      cards: [],
      liked: [],
      disliked: []
    }
  },
  methods: {
    likeCard (card) {
      this.liked.unshift(card)
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    dislikeCard (card) {
      this.disliked.unshift(card)
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    loadCards () {
      this.cards = _cards
    }
  },
  mounted () {
    this.loadCards()
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


.deck {
  display: flex;
  flex-direction: column;
}

.card {
  background: lightblue;
  display: none;
  flex-direction: column;
}

.card img {
  width: 100%;
}

.deck .card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 400px;
}

.deck .card:nth-of-type(1) {
  transform: scale(1);
  z-index: 3;
}

.deck .card:nth-of-type(2) {
  transform: scale(0.9) translate(0, -125%);
  z-index: 2;
}

.deck .card:nth-of-type(3) {
  transform: scale(0.8) translate(0, -280%);
  z-index: 1;
}

.liked, .disliked {
  display: flex;
  flex-direction: column;
}

.liked .card:nth-of-type(-n+3),
.disliked .card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 260px;
}

.liked .card:nth-of-type(1),
.disliked .card:nth-of-type(1) {
  transform: scale(1);
  z-index: 3;
}

.liked .card:nth-of-type(2),
.disliked .card:nth-of-type(2) {
  transform: scale(0.9) translate(0, -125%);
  z-index: 2;
}

.liked .card:nth-of-type(3),
.disliked .card:nth-of-type(3) {
  transform: scale(0.8) translate(0, -280%);
  z-index: 1;
}

.container .liked,
.container .disliked {
  background: beige;
  flex: 0 0 195px;
  height: 260px;
}
</style>
