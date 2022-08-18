// index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 使用Vuex
export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        count(state) {
            return state.count
        }
    },
    mutations: {
        increment(state, num) {
            if (num) {
                state.count += num
            } else {
                state.count++
            }
        }
    },
    actions: {},
    modules: {}
})
