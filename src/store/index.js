import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProducts: [],
    loginView: false,
    signupView: false,
    cart: []
  },
  mutations: {
    addToCart(state, data){
      state.cart = data
    },
    productsList(state, data){
      state.allProducts = data
    },
    isLoginView(state, data){
      state.loginView = data
    },
    isSignupView(state, data){
      state.signupView = data
    }
  },
  actions: {
  },
  modules: {
  }
})
