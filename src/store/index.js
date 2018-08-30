import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import booksmodule from './modules/booksmodule'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    login,
    booksmodule
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
