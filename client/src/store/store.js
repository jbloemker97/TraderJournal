import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import API from '../helpers/api';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: 'TraderJournal',
    storage: window.sessionStorage
});

export const store = new Vuex.Store({
    state: {
        jwt: null, // JSON Web Token
    },
    actions: {
        login: async ({ commit }, obj) => {
            let user = await API.login(obj.email, obj.password);

            commit('setJwt', user);
        },
        logout: ({ commit }) => {
            commit('setJwt', null);
        }
    },
    mutations: {
        setJwt: (state, payload) => {
            state.jwt = payload.headers['x-auth-token'];
        }
    },
    getters: {
        getJwt: state => state.jwt
    },
    plugins: [vuexPersist.plugin]
});