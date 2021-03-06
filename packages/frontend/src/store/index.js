/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-unresolved */
import { createStore } from 'vuex';

import {
  removeTokenLocal, setTokenLocal, setAuth, removeAuth, getAuth,
} from '@/utils/localStorage';
import projectApi from '@/service/projectApi';

export default createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser (state, user) {
      state.user = user;
    },
    setToken (state, token) {
      state.token = token;
    },
  },
  actions: {
    restoreSession ({ commit }) {
      const user = getAuth();
      console.log('reset session');
      if (!user) { return; }
      commit('setUser', user);
    },
    async signIn ({ commit }, payload) {
      try {
        const res = await projectApi.signin(payload);
        if (res.status === 200) {
          const user = res.data;
          setTokenLocal(user.accessToken);
          setAuth(user);
          commit('setUser', user);
        }
      } catch (err) {
        // eslint-disable-next-line
        throw new Error(err.response.data.message);
      }
    },
    signOut () {
      removeAuth();
      removeTokenLocal();
      location.reload();
    },
  },
});
