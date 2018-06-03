import Api from '../../services/api'

const state = {
  all: [],
  liked: [],
  disliked: []
}

const getters = {
  allCards: state => state.all,
  likedCards: state => state.liked,
  dislikedCards: state => state.disliked
}

const actions = {
  getAllCardsFromAPI ({ commit }) {
    Api().get('/cards').then((response) => {
      commit('setCardsFromAPI', { cards: response.data })
    }, (err) => {
      console.log(err)
    })
  },

  getAllCardsFromLocalStorage ({ commit }) {
    commit('setCardsFromLocalStorage')
  },

  addToLikedCards ({ state, commit }, card) {
    commit('pushToLikedCards', { card })
    commit('removeCardFromAllCards', { card })
  },

  addToDislikedCards ({ state, commit }, card) {
    commit('pushToDislikedCards', { card })
    commit('removeCardFromAllCards', { card })
  }
}

const mutations = {
  setCardsFromAPI (state, { cards }) {
    state.all = cards
  },

  setCardsFromLocalStorage (state) {
    if (localStorage.getItem('cards')) {
      this.replaceState(JSON.parse(localStorage.getItem('cards')))
    }
  },

  pushToLikedCards (state, { card }) {
    state.liked.unshift(card)
  },

  pushToDislikedCards (state, { card }) {
    state.disliked.unshift(card)
  },

  removeCardFromAllCards (state, { card }) {
    state.all.splice(state.all.indexOf(card), 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
