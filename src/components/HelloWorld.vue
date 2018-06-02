<template>
  <div class="hello">
    <div class="container">
      <div class="cards like">LIKE</div>
      <div class="cards deck">DECK
        <div class="card" v-for="card in cards">
          <p>{{ card.title }}</p>
        </div>
      </div>
      <div class="cards dislike">DISLIKE</div>
    </div>
  </div>
</template>

<script>
import _cards from '../api/cards.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      cards: []
    }
  },
  methods: {
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
  background: lightblue;
  flex: 0 0 300px;
  height: 400px;
  margin: 0 75px;
}

.container .like,
.container .dislike {
  background: beige;
  flex: 0 0 195px;
  height: 260px;
}
</style>
