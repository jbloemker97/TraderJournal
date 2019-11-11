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
        // jwt: null, // JSON Web Token
        user: null, // User object
    },
    actions: {
        login: async ({ commit }, obj) => {
            const user = await API.login(obj.email, obj.password);
            const error = user.error;

            commit('setUser', user);

            API.finalizeLogin(error);
        },
        register: async ({ commit }, obj) => {
            const user = await API.register(obj.name, obj.email, obj.password);
            const error = user.error;

            
            commit('setUser', user);
            
            API.finalizeRegister(error);
        },
        logout: ({ commit }) => {
            commit('setUser', null);
        }
    },
    mutations: {
        setUser: (state, payload) => {
            // state.jwt = payload.headers['x-auth-token'];
            // state.jwt = payload;
            state.user = payload;
        }
    },
    getters: {
        // getJwt: state => state.jwt
        getUser: state => state.user
    },
    plugins: [vuexPersist.plugin]
});