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
    async login ({ commit, dispatch }) {
      try {
        const user = await $fetch('user')
        console.log('user', user)
        commit('user', user)

        if (user) {
          // Redirect to the wanted route or home
          router.replace(router.currentRoute.params.wantedRoute || { name: 'home' })

          dispatch('logged-in')
        }
      } catch (e) {
        console.warn(e)
      }
    },

    logout ({ commit, dispatch }) {
      commit('user', null)

      $fetch('logout')

      // If the route is private
      // We go to the login screen
      if (router.currentRoute.matched.some(r => r.meta.private)) {
        router.replace({ name: 'login', params: {
            wantedRoute: router.currentRoute.fullPath,
          }})
      }
    },


  user () {
    return this.$store.getters.user
  },




})


export default store
