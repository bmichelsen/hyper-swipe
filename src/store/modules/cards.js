import cards from '../../api/cards'

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
  getAllCards ({ commit }) {
    commit('setCards', cards)
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
  setCards (state, cards) {
    state.all = cards
  },

  pushToLikedCards (state, { card }) {
    // TODO: unshift() instead?
    state.liked.push(card)
  },

  pushToDislikedCards (state, { card }) {
    // TODO: unshift() instead?
    state.disliked.push(card)
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
