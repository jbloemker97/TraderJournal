import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: { jwt: null, id: null }, // JSON Web Token & Mongo User ID
    },
    actions: {
        logout: ({ commit }) => {
            commit('setUser');
        }
    },
    mutations: {
        setUser: (state, user) => {
            state.user.jwt = user.jwt;
            state.user.id = user.id;
        }
    },
    getters: {}
});