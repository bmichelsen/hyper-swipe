<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
