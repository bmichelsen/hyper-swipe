<template>
  <div id="app">
    <CardHeader/>
    <CardSection/>
  </div>
</template>

<script>
import CardHeader from './components/cards/Header'
import CardSection from './components/cards/Section'

export default {
  name: 'App',
  components: {
    CardHeader,
    CardSection
  },
  created () {
    (() => {

      const supportsLocalStorage = () => {
        return typeof(Storage) !== 'undefined'
      }

      if (!supportsLocalStorage) {

        alert("Please enable localStorage.")

      } else {

        try {

          if (localStorage.getItem('cards')) {

            this.$store.dispatch('getAllCardsFromLocalStorage')

          } else {

            this.$store.dispatch('getAllCardsFromAPI')

          }

        } catch (e) {

          alert("Could not load data.")

        }

      }

    })()

  }

}
</script>

<style>
* { box-sizing: border-box; }

body, html, h1, h4, img, p {
  border: 0;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}

body {
  background: #0f0124;
  display: flex;
  flex-direction: column;
  font: 300 1rem Nunito, sans-serif;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.block-ellipsis {
  display: block;
  display: -webkit-box;
  margin: 0 auto;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -moz-box-orient: vertical;
  -ms-box-orient: vertical;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.center-content {
  align-items: center;
  justify-content: center;
}

.user-select-none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
