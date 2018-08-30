// initial state
// shape: [{ id, quantity }]
const state = {
  books: [],
  selectedBook: null,
  verified: 0
}

// getters
const getters = {

}

// actions
const actions = {
}

// mutations
const mutations = {
  UpdateBooks (state, books) {

    state.books = books
    //console.log(state.members[1].email);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
