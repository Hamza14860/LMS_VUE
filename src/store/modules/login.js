// initial state
// shape: [{ id, quantity }]
const state = {
  members: [],
  selectedMember: null,
  selectedIssueMember: [],
  logoutStatus: null,
  email: null,
  password: null,
  verified: 0
}

// getters
const getters = {
  /*currentUser (state) {
    return state.selectedMember.email
  }*/

}

// actions
const actions = {
}

// mutations
const mutations = {
  UpdateMembers (state, members) {

    state.members = members
    //console.log(state.members[1].email);
  },
  checkLogin (state, [email,pass,arg]) {
    console.log(email)
    console.log(pass)
    let k;
    for (k = 0; k < state.members.length; ++k) {
      console.log(state.members[k].email)
      console.log(state.members[k].password)

      if(state.members[k].email === email && state.members[k].password === pass){
          console.log("The email password is correct");
          state.email=state.members[k].email
          state.password=state.members[k].password
          state.selectedMember=state.members[k].id
          state.selectedIssueMember[0]=state.members[k]
            arg.out = {
            status : "succeed"
          }
          state.verified=1
          return true;
          break;
      }
      else {
          console.log("The email and / or password is incorrect");
          //this.$router.push('/')
          //return false;
      }
     }
     if( state.verified !==1){
       arg.out = {
       status : "false"
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
