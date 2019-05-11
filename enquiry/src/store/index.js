import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  increase (state, payload) {
    state[payload.name] = payload.value
  }
}

const action = {

}

export default new Vuex.Store({
  state,
  mutations,
  action
})
