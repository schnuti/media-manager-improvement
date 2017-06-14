import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import * as getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

// A Vuex instance is created by combining the state, mutations, actions, and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: state.disks.reduce((modules, current) => {
        modules[current.name] = {}
        return modules;
    }, {}),
    strict: process.env.NODE_ENV !== 'production'
})