// initial state
// shape: [{ id, quantity }]
const state = {
  books: [],
  selectedBook: [],
  verifiedbook: 0
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
  },
  SearchedBook (state, [sbook,arg]) {


    let k;
    for (k = 0; k < state.books.length; ++k) {
      if(state.books[k].name === sbook ){
          console.log("The Book Exists in Database");
          //state.selectedBook = sbook
          state.selectedBook[0]=state.books[k]

            arg.out = {
            status : "succeedbook"
          }
          state.verifiedbook=1
          return true;
          break;
      }

     }
     if( state.verifiedbook !==1){
       arg.out = {
       status : "falsebook"
      }

     }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
