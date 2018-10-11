import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state () {
    return {
      user: null,
    }
  },

  actions: {
    login ({ commit }) {
      const userData = {
        profile: {
          displayName: 'Mr Cat',
        },
      }
      commit('user', userData)
    },
    logout ({ commit }) {
      commit('user', null)
    },
  },

  getters: {
    user: state => state.user,
  },

  mutations: {
    user: (state, user) => {
      state.user = user
    },
  },
  user () {
    return this.$store.getters.user
  },


})


export default store
