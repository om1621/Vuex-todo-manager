import Vuex from 'vuex';
import Vue from 'vue';
import Todos from './modules/Todos'

// Loading the vuex
Vue.use(Vuex);

// Creating the store
export default new Vuex.Store({
    modules: {
        Todos
    }
})