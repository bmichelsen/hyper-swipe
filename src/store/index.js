import Vue from 'vue'
import Vuex from 'vuex'
import cards from './modules/cards'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cards
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('cards', JSON.stringify(state))
})

export default store
