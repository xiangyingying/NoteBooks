import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import info from './modules/info'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isLoading:false
  },
  modules: {
    user,
    info
  }
})
