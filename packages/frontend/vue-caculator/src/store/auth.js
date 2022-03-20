/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

/* eslint-disable import/no-unresolved */
import {
  removeToken, setToken, setAuth, removeAuth, getAuth,
} from '@/utils/localStorage';
import projectApi from '@/service/projectApi';

export const state = () => ({
  user: null,
  token: null,
});

export const actions = {
  restoreSession ({ commit }) {
    const user = getAuth();
    if (!user) { return; }
    commit('setUser', user);
  },
  async signIn ({ commit }, payload) {
    try {
      const res = await projectApi.signin(payload);
      if (res.status === 200) {
        const user = res.data;
        setToken(user.accessToken);
        setAuth(user);
        commit('setUser', user);
      }
    } catch (err) {
      console.log(err);
    }
  },
  signOut () {
    removeAuth();
    removeToken();
    location.reload();
  },
};

export const getters = {
};

export const mutations = {
  setUser (state, user) {
    state.user = user;
  },
};
