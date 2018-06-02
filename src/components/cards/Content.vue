<template>
  <div class="card">
    <img :src=card.image />
    <h4>{{ card.title }}</h4>
    <p>{{ card.body }}</p>
  </div>
</template>

<script>
  export default {
    name: 'cardContent',
    props: ['card']
  }
</script>
