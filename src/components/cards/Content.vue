<template>
  <div class="card user-select-none">
    <img :src=card.image draggable="false" />
    <h4>{{ card.title }}</h4>
    <p class="block-ellipsis">{{ card.body }}</p>
  </div>
</template>

<script>
  export default {
    name: 'cardContent',
    props: ['card']
  }
</script>

<style scoped>
.card {
  background: #00ffff;
  border-radius: 10px;
  color: #0f0124;
  display: none;
  flex-direction: column;
  overflow: hidden;
  text-align: center;
}

.card h4 {
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 0.6px;
  margin: 30px 20px 0 20px;
  text-transform: uppercase;
}

.card img { max-width: 100%; }

.card p {
  font-size: 1.125rem;
  letter-spacing: 0.4px;
  margin: 12px 20px 0 20px;
}

.card:nth-of-type(-n+3) {
  display: flex;
  flex: 1 0 260px;
}

.card:nth-of-type(1) {
  transform: scale(0.8) translate(0, 5%);
  z-index: 3;
}

.card:nth-of-type(2) {
  transform: scale(0.7) translate(0, -150%);
  z-index: 2;
}

.card:nth-of-type(3) {
  transform: scale(0.6) translate(0, -355%);
  z-index: 1;
}

.cards .card h4 {
  font-size: 1rem;
  margin-top: 15px;
}

.cards .card p {
  font-size: 0.9rem;
  margin-top: 6px;
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
  transform: scale(0.9) translate(0, -119.5%);
  z-index: 2;
}

.deck .card:nth-of-type(3) {
  transform: scale(0.8) translate(0, -268.8%);
  z-index: 1;
}
</style>
